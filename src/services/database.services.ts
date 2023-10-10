import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import User from '~/models/schemas/user.schema';
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@be.7wt5ilp.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
console.log('Connecting to MongoDB Atlas...', process.env.DB_USERNAME, process.env.DB_PASSWORD);
class DatabaseService {
  private client: MongoClient;
  private readonly db: Db;
  constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    });
    this.db = this.client.db(process.env.DB_NAME);
  }

  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect();
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 });
      console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  get users(): Collection<User> {
    return this.db.collection('users');
  }
}

//create object of class
const databaseService = new DatabaseService();
export default databaseService;
