const autoMapper = require('automapper-js');

class BaseBussiness {

  constructor(entityRepository, entityToMap) {
    this._entityRepository = entityRepository;
    this.entityToMap = entityToMap;
  }

  async getAll() {
    const entities = await this._entityRepository.getAll();
    // from sqlelize to json to map model
    return entities.map(entity => autoMapper(this.entityToMap, entity.toJSON()));
  }

  async get(id) {
    const entity = await this._entityRepository.get(id);
    if(!entity)
      return null;
    return autoMapper(this.entityToMap, entity.toJSON());
  }

  async create(entity) {
    entity = autoMapper(this.entityToMap, entity);
    const createdEntity = await this._entityRepository.create(entity);
    // returns a domain entity to the controller
    return autoMapper(this.entityToMap, createdEntity);
  }

  async update(id, entity) {
    entity.id = id;
    entity = autoMapper(this.entityToMap, entity);
    const updatedEntity = await this._entityRepository.update(id, entity);
    // returns a domain entity to the controller
    return autoMapper(this.entityToMap, updatedEntity);
  }

  async delete(id) {
    return await this._entityRepository.delete(id);    
  }
}

module.exports = BaseBussiness;