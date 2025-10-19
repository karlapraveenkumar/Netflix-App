import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted and we have changed the code little bit
  dangerouslyAllowBrowser : true,
});

export default openai;
