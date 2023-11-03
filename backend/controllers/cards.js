const mongoose = require('mongoose');
const Card = require('../models/card');

const {
  OK,
  CREATED,
} = require('../constants');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((cards) => res.status(OK).send({ cards }))
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports.createCard = (req, res, next) => {
  const ownerId = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner: ownerId })
    .then((card) => {
      res.status(CREATED).send({
        likes: card.likes,
        _id: card._id,
        name: card.name,
        link: card.link,
        owner: {
          name: req.user.name,
          about: req.user.about,
          avatar: req.user.avatar,
          _id: req.user._id,
        },
        createdAt: card.createdAt,
      });
    })
    .catch((err) => {
      console.log(err);
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequestError('Переданы некорректные данные при создании карточки'));
      } else {
        next(err);
      }
    });
};

module.exports.removeCard = (req, res, next) => {
  const currentUser = req.user._id;
  const cardID = req.params.cardId;
  Card.findById(cardID)
    .orFail(new NotFoundError('Карточка с указанным _id не найдена'))
    .populate(['owner', 'likes'])
    .then((card) => {
      const cardOwner = card.owner._id;
      if (JSON.stringify(cardOwner) !== JSON.stringify(currentUser)) {
        throw new ForbiddenError('Нельзя удалить чужую карточку');
      } else {
        Card.findOneAndRemove(card._id)
          .then(() => {
            res.status(OK).send({ message: 'Карточка успешно удалена' });
          })
          .catch((err) => {
            console.log(err);
            if (err instanceof mongoose.Error.CastError) {
              next(new BadRequestError('Передан некорректный формат _id карточки'));
            } else {
              next(err);
            }
          });
      }
    })
    .catch((err) => {
      console.log(err);
      if (err instanceof mongoose.Error.CastError) {
        next(new BadRequestError('Передан некорректный формат _id карточки'));
      } else {
        next(err);
      }
    });
};

const updateLike = (req, res, next, whatToDoWithLike) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    whatToDoWithLike,
    { new: true },
  )
    .orFail(new NotFoundError('Передан несуществующий _id карточки'))
    .populate(['owner', 'likes'])
    .then((card) => res.status(OK).send({
      likes: card.likes,
      _id: card._id,
      name: card.name,
      link: card.link,
      owner: {
        name: card.owner.name,
        about: card.owner.about,
        avatar: card.owner.avatar,
        _id: card.owner._id,
      },
      createdAt: card.createdAt,
    }))
    .catch((err) => {
      console.log(err);
      if (err instanceof mongoose.Error.CastError) {
        next(new BadRequestError('Переданы некорректные данные для постановки/снятия лайка'));
      } else {
        next(err);
      }
    });
};

module.exports.likeCard = (req, res, next) => {
  const whatToDoWithLike = { $addToSet: { likes: req.user._id } };
  return updateLike(req, res, next, whatToDoWithLike);
};

module.exports.dislikeCard = (req, res, next) => {
  const whatToDoWithLike = { $pull: { likes: req.user._id } };
  return updateLike(req, res, next, whatToDoWithLike);
};
