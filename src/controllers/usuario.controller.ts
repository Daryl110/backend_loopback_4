import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import { inject } from "@loopback/context";
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody
} from '@loopback/rest';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository,
  ) {}

  @post('/Usuario', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: {'x-ts-type': Usuario}}},
      },
    },
  })
  async create(@requestBody() usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.create(usuario);
  }

  @get('/Usuario/count', {
    responses: {
      '200': {
        description: 'Usuario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where,
  ): Promise<Count> {
    return await this.usuarioRepository.count(where);
  }

  @get('/Usuario', {
    responses: {
      '200': {
        description: 'Array of Usuario model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Usuario}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Usuario)) filter?: Filter,
  ): Promise<Usuario[]> {
    return await this.usuarioRepository.find(filter);
  }

  @patch('/Usuario', {
    responses: {
      '200': {
        description: 'Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() usuario: Usuario,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where,
  ): Promise<Count> {
    return await this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/Usuario/{id}', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: {'x-ts-type': Usuario}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Usuario> {
    return await this.usuarioRepository.findById(id);
  }

  @patch('/Usuario/{id}', {
    responses: {
      '204': {
        description: 'Usuario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/Usuario/{id}', {
    responses: {
      '204': {
        description: 'Usuario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/Usuario/{id}', {
    responses: {
      '204': {
        description: 'Usuario DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }

  @post('/Usuario/Login', {
    responses: {
      '204': {
        description: 'Login',
        content: {'application/json': {schema: {'x-ts-type': Usuario}}}
      }
    },
  })
  async login(@requestBody() credenciales: any){
    await this.usuarioRepository.find().then(response => {
      console.log(response);
      return response;
    });
  }
}
