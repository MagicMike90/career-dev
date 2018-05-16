export class AppAlert {
  type: AlertType;
  message: string;

  constructor(type: AlertType) {
    this.type = type;
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
