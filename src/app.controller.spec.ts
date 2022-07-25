import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;

  beforeEach(async () => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('to be spy', () => {
    it('non-spy', () => {
      expect(appController.getToBeSpy()).toBe('non-spy');
    });
  });

  describe('be spy', () => {
    it('be spied', () => {
      jest
        .spyOn(appService, 'getToBeSpy')
        .mockImplementation(() => 'this is spy');

      expect(appController.getToBeSpy()).toBe('this is spy');
    });
  });
});
