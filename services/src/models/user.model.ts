//@Note: may likely change it to a class.
//@todo: Using TypeORM?

export type User = {
  id: any;

  //@todo: firstName instead?
  name: string;
  lastName: string;

  email: string;

  //epoch?
  createdAt: any;
  updatedAt: any;
};
