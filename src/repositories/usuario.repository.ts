import {DefaultCrudRepository} from '@loopback/repository';
import {Usuario} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.nombreUsuario
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
