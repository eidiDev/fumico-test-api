import { typeOrmConfigService } from '../../config/typeOrmConfig.service';
import fs = require('fs');
console.log('Creating ormconfig.json...');
fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(typeOrmConfigService.getTypeOrmConfig(), null, 2),
);
console.log('Process finished...');