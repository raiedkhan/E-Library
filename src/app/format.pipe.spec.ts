import { FormatPipe } from './format.pipe';

describe('FormatPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatPipe();
    expect(pipe).toBeTruthy();
  });
  it('Checking pipe functionality', () => {
    const pipe = new FormatPipe();
    expect(pipe.transform('shilpa','female')).toBeTruthy('Ms shilpa');
  });
});
