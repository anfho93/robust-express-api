class BaseService {

    constructor(entityBussiness) {
      this._entityBussiness = entityBussiness;
    }
  
    async getAll() {
      const entities = await this._entityBussiness.getAll();
      return entities;
    }
    
    async get(id) {
      const entity = await this._entityBussiness.get(id);
      return entity;
    }
  
    async create(entity) {
      const createdEntity = await this._entityBussiness.create(entity);
      // returns a domain entity to the controller
      return createdEntity;
    }
  
    async delete(id) {
      const deletedUser = await this._entityBussiness.delete(id);
      return deletedUser;
    }
  
    async update(id, entity) {
      const updatedEntity = await this._entityBussiness.update(id, entity);
      return updatedEntity;
    }
  }
  
  module.exports = BaseService;