/**
 * character controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::character.character', ({ strapi}) => ({
  async findOne(ctx) {
    const {id} = ctx.params
    const entity = await strapi.db.query('api::character.character').findOne({
      where : { slug:id },
      populate: ['image', 'nation']
    })
    const sanitizedEntity = await this.sansitizeOutput(entity, ctx)
    return this.transformResponse(sanitizedEntity)
  }
}));
