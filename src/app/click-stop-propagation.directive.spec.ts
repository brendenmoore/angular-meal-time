import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

//
//allows stop propagation to be defined on html element
//use click-stop-propagation inside html tag
//
describe('ClickStopPropagationDirective', () => {
  it('should create an instance', () => {
    const directive = new ClickStopPropagationDirective();
    expect(directive).toBeTruthy();
  });
});
