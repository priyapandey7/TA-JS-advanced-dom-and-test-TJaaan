const {
    getFullName,
    isPalindrome,
    getCircumference,
    getArea,
  } = require('./index');
  
  // getFullName
  
  // Positive
  
//   test('concat John and Snow  to be equal John Snow', () => {
//     expect(getFullName('John', 'Snow')).toBe('John snow');
//   });
  
//   test('concate Priya Pandey  to equal Priya Pandey', () => {
//     expect(getFullName('Priya', 'Pandey')).toBe('Priya Pandey');
//   });
  
//   test('concate Shushma Pandey  to equal Shushma  Pandey', () => {
//     expect(getFullName('Shushma','Pandey')).toBe('Shushma Pandey');
//   });
  
  // Negative
  
  test('concate Arya + Stark not to equal Arya Sen', () => {
    expect(getFullName('John', 'snow')).not.toBe('John Stark');
  });
  
  test('concate Priya + Pandey not to equal nisha Singh', () => {
    expect(getFullName('Priya', 'Pandey')).not.toBe('nisha Singh');
  });
  
  test('concate Nisha + singh not to equal Surbhi Singh', () => {
    expect(getFullName('Nisha', 'Singh')).not.toBe('Surbh singh');
  });
  
  // isPalindrome
  
  test('madam to equal true', () => {
    expect(isPalindrome('madam')).toBe(true);
  });
  
  // getCircumferance
  
  test('circumference of radius 5 to equal 31', () => {
    expect(getCircumference(5)).toBe(`The circumference is 31`);
  });
  
  // getArea
  
  test('Area of radius 5 to equal 78', () => {
    expect(getArea(5)).toBe(`The area is 78`);
  });
  