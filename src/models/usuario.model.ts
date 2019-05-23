import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  nombreUsuario: string;

  @property({
    type: 'string',
  })
  nombreCompleto?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}
