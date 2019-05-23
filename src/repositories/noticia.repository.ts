import { DefaultCrudRepository } from '@loopback/repository';
import { Noticia } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class NoticiaRepository extends DefaultCrudRepository<
  Noticia,
  typeof Noticia.prototype.id
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Noticia, dataSource);
  }
}
