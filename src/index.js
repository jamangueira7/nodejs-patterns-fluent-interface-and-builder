import data from './../database/data.json';
import FluentSQLBluider from './fluentSQL.js';

const result = FluentSQLBluider
    .for(data)
    //ou inicia com 2020 ou 2019
    .where({ registered: /^(2020|2019)/ })
    //categorias que são exatamente 'security' ou 'developer' ou 'quality assurance'
    .where({ category: /^(security|developer|quality assurance)$/ })
    //parenteses literais precisam de scapte () vira isso aqui \(\)
    .where({ phone: /\((852|890|810)\)/ })
    .select(['name', 'phone', 'category', 'registered'])
    .orderBy('category')
    .limit(2)
    .bluid();

console.table(result);
