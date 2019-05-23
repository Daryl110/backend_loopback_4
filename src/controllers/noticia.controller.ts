import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Noticia} from '../models';
import {NoticiaRepository} from '../repositories';

export class NoticiaController {
  constructor(
    @repository(NoticiaRepository)
    public noticiaRepository : NoticiaRepository,
  ) {}

  @post('/Noticia', {
    responses: {
      '200': {
        description: 'Noticia model instance',
        content: {'application/json': {schema: {'x-ts-type': Noticia}}},
      },
    },
  })
  async create(@requestBody() noticia: Noticia): Promise<Noticia> {
    return await this.noticiaRepository.create(noticia);
  }

  @get('/Noticia/count', {
    responses: {
      '200': {
        description: 'Noticia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Noticia)) where?: Where,
  ): Promise<Count> {
    return await this.noticiaRepository.count(where);
  }

  @get('/Noticia', {
    responses: {
      '200': {
        description: 'Array of Noticia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Noticia}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Noticia)) filter?: Filter,
  ): Promise<Noticia[]> {
    return await this.noticiaRepository.find(filter);
  }

  @patch('/Noticia', {
    responses: {
      '200': {
        description: 'Noticia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() noticia: Noticia,
    @param.query.object('where', getWhereSchemaFor(Noticia)) where?: Where,
  ): Promise<Count> {
    return await this.noticiaRepository.updateAll(noticia, where);
  }

  @get('/Noticia/{id}', {
    responses: {
      '200': {
        description: 'Noticia model instance',
        content: {'application/json': {schema: {'x-ts-type': Noticia}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Noticia> {
    return await this.noticiaRepository.findById(id);
  }

  @patch('/Noticia/{id}', {
    responses: {
      '204': {
        description: 'Noticia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() noticia: Noticia,
  ): Promise<void> {
    await this.noticiaRepository.updateById(id, noticia);
  }

  @put('/Noticia/{id}', {
    responses: {
      '204': {
        description: 'Noticia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() noticia: Noticia,
  ): Promise<void> {
    await this.noticiaRepository.replaceById(id, noticia);
  }

  @del('/Noticia/{id}', {
    responses: {
      '204': {
        description: 'Noticia DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.noticiaRepository.deleteById(id);
  }
}
