import jwt from 'jsonwebtoken';
// Feito com ajuda do Ebraim Oliveira. Texto comentado abaixo por Ebraim.

// Json Web Token

// o sign serve para 'assinar' o jwt. Contem 3 partes:
// 1. um payload (informações que permitem identificar o usuario depois)
// 2. um secret, que é uma assinatura digital.
// 3. metadados do jwt,

class JWTGenerator {
  private secret: string;

  constructor() {
    this.secret = process.env.JWT_SECRET || 'secret';
  }

  get mySecret(): string {
    return this.secret;
  }

  public tokenGenerator(id: number | undefined, username: string) {
    const JWT = jwt.sign({ id, username }, this.secret, { expiresIn: '7d', algorithm: 'HS256' });

    return JWT;
  }
}

export default JWTGenerator;
