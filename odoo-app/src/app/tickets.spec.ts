/* tslint:disable:no-unused-variable */
///<reference path="../../typings/globals/jasmine/index.d.ts"/>
/*
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';*/
import {Tickets} from './tickets';

describe('Tickets', () => {

  it('should create an instance', () => {
    expect(new Tickets()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let tickets = new Tickets({
      id: 234,
      date: new Date(),
      amount: 123.45,
      client: 'NewClient',
    });
    expect(tickets.client).toEqual('NewClient');
    expect(tickets.id).toEqual(234);
    expect(tickets.date).toEqual(234);
    expect(tickets.amount).toEqual(123.45);
  });

});
