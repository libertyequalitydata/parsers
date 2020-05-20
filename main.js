import google from './parsers/google';
import facebook from './parsers/facebook';
import { basePaths } from './config'; // WARNING: dev only

google(basePaths.google);
facebook(basePaths.facebook);