export interface CharacterPropsBase {
  name: string;
}

export interface CardBackProps extends CharacterPropsBase {
  species: string;
  status: string;
  gender: string;
  origin: {
    name:string
  },
  location: {
    name:string
  }
}

export interface CardFrontProps extends CharacterPropsBase {
  image: string;
}

export interface CharacterProps extends CardBackProps, CardFrontProps {}