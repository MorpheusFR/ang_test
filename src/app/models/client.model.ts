export class AppModule { }

import { Address } from './address.model';
import { Contact } from './contact.model';
import { Job } from './job.model';
import { General } from './general.model';

export class Client {
  id: number;
  general: General;
  job: Job;
  contact: Contact;
  address: Address;
}