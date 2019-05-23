import {Entity, model, property} from '@loopback/repository';

@model()
export class Noticia extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Noticia>) {
    super(data);
  }
}
