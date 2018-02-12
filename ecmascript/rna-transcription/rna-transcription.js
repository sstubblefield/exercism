class Transcriptor {
  toRna(input) {
    let nucleotide = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };

    let makeArr = input.split('');
    let nucArr = [];

    makeArr.forEach(function (data) {
      if (nucleotide[data[0]] !== undefined) {
        nucArr.push(nucleotide[data[0]]);
      } else { 
        throw new Error('Invalid input DNA.');
      }
    });

    let flipped = nucArr.join('');

    return flipped;
  }
}

export default Transcriptor;