import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(book: User): Promise<User>;
    readAll(): Promise<User[]>;
    readById(id: any): Promise<User>;
    findbyName(name: any): Promise<User>;
    update(id: any, book: User): Promise<User>;
    delete(id: any): Promise<any>;
}
