import { Birthdate } from './../src/galactic.js';


describe('Birthdate', function(){
  it('should calculate the age of someone into seconds', function(){
    let birthdate = new Birthdate();
    expect(birthdate.secondsAge(15)).toEqual(473040000);
  });
  it('should calculate the age of someone on Mercury', function(){
    let birthdate= new Birthdate();
    expect(birthdate.ageMecury(15)).toEqual(62);
  });
  it('should calculate the age of someone on Venus', function(){
    let birthdate= new Birthdate();
    expect(birthdate.ageVenus(15)).toEqual(24);
  });
  it('should calculate the age of someone on Mars', function(){
    let birthdate= new Birthdate();
    expect(birthdate.ageMars(15)).toEqual(7);
  });
  it('should calculate the age of someone on Jupiter', function(){
    let birthdate= new Birthdate();
    expect(birthdate.ageJupiter(15)).toEqual(1);
  });
  it('should calculate the life expectancy of someone based on if they are male', function(){
    let birthdate = new Birthdate();
    expect(birthdate.expectancyMan(78)).toEqual(78);
  });
  it('should calculate the seconds between two days', function(){
    let birthdate= new Birthdate();
    expect(birthdate.differenDate("April 20, 2018 03:45:00", "March 13, 1997 03:45:00")).toEqual(665967600000);
  });
  it('should calculate the life expectancy of someone based on if they are female', function(){
    let birthdate = new Birthdate();
    expect(birthdate.expectancyWoman(81)).toEqual(81);
  });
  it('should calculate the life expectancy left over for a man', function(){
    let birthdate = new Birthdate();
    expect(birthdate.lifeMan(15)).toEqual(63);
  });
  it('should calculate the life expectancy left over for a woman', function(){
    let birthdate = new Birthdate();
    expect(birthdate.lifeWoman(15)).toEqual(66);
  });
});
