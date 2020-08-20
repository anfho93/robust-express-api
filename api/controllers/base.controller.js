
const mapper = require('automapper-js');
class BaseController {

  constructor(entityService, entityDTO) {
    this._entityService = entityService;
    this.entityDTO = entityDTO;
  }

  async getAll(req, res) {
    let entities = await this._entityService.getAll();
    entities = entities.map(entity => mapper(this.entityDTO, entity));

    return res.status(200).send({
      payload: entities
    });
  }

  async get(req, res) {
    const { id } = req.params;
    let entity = await this._entityService.get(id);
    if (!entity) {
      return res.status(404).send();
    }

    entity = mapper(this.entityDTO, entity);

    return res.status(200).send({
      payload: entity
    });
  }

  async create(req, res) {
    const { body } = req;
    let createdEntity = await this._entityService.create(body);
    createdEntity = mapper(this.entityDTO, createdEntity);

    return res.status(201).send({
      payload: createdEntity
    });
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    let updatedEntity = await this._entityService.update(id, body);
    updatedEntity = mapper(this.entityDTO, updatedEntity);

    return res.status(204).send({
      payload: updatedEntity
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    let deletedEntity = await this._entityService.delete(id);
    deletedEntity = mapper(this.entityDTO, deletedEntity);

    return res.status(204).send({
      payload: deletedEntity
    });
  }
}

module.exports = BaseController;