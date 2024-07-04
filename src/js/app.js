// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function heroHealth(character) {
    if (character.health > 50) {
        return 'healthy';
      }
    
      if (character.health < 15) {
        return 'critical';
      }
    
      return 'wounded';
};