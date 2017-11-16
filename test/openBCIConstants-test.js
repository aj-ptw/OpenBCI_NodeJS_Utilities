/**
* Created by ajk on 12/16/15.
*/
'use strict';
/* global describe, it, afterEach */
let bluebirdChecks = require('./bluebirdChecks');
let assert = require('assert');
let k = require('../dist/constants');
let chai = require('chai');
let expect = chai.expect;
let should = chai.should(); // eslint-disable-line no-unused-vars
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

let getListOfPeripheralsOfSize = (perifsToMake) => {
  perifsToMake = perifsToMake || 3;

  let output = [];

  for (let i = 0; i < perifsToMake; i++) {
    output.push({
      advertisement: {
        localName: makeLocalName(i),
        txPowerLevel: undefined,
        manufacturerData: undefined,
        serviceData: [],
        serviceUuids: []
      }
    });
  }
  return output;
};

let makeLocalName = (num) => {
  let localName = `${k.OBCIGanglionPrefix}-00`;
  if (num < 10) {
    localName = `${localName}0${num}`;
  } else {
    localName = `${localName}${num}`;
  }
  return localName;
};

describe('OpenBCIConstants', function () {
  afterEach(() => bluebirdChecks.noPendingPromises());
  describe('Turning Channels Off', function () {
    it('channel 1', function () {
      assert.equal('1', k.OBCIChannelOff1);
    });
    it('channel 2', function () {
      assert.equal('2', k.OBCIChannelOff2);
    });
    it('channel 3', function () {
      assert.equal('3', k.OBCIChannelOff3);
    });
    it('channel 4', function () {
      assert.equal('4', k.OBCIChannelOff4);
    });
    it('channel 5', function () {
      assert.equal('5', k.OBCIChannelOff5);
    });
    it('channel 6', function () {
      assert.equal('6', k.OBCIChannelOff6);
    });
    it('channel 7', function () {
      assert.equal('7', k.OBCIChannelOff7);
    });
    it('channel 8', function () {
      assert.equal('8', k.OBCIChannelOff8);
    });
    it('channel 9', function () {
      assert.equal('q', k.OBCIChannelOff9);
    });
    it('channel 10', function () {
      assert.equal('w', k.OBCIChannelOff10);
    });
    it('channel 11', function () {
      assert.equal('e', k.OBCIChannelOff11);
    });
    it('channel 12', function () {
      assert.equal('r', k.OBCIChannelOff12);
    });
    it('channel 13', function () {
      assert.equal('t', k.OBCIChannelOff13);
    });
    it('channel 14', function () {
      assert.equal('y', k.OBCIChannelOff14);
    });
    it('channel 15', function () {
      assert.equal('u', k.OBCIChannelOff15);
    });
    it('channel 16', function () {
      assert.equal('i', k.OBCIChannelOff16);
    });
  });
  describe('Turning Channels On', function () {
    it('channel 1', function () {
      assert.equal('!', k.OBCIChannelOn1);
    });
    it('channel 2', function () {
      assert.equal('@', k.OBCIChannelOn2);
    });
    it('channel 3', function () {
      assert.equal('#', k.OBCIChannelOn3);
    });
    it('channel 4', function () {
      assert.equal('$', k.OBCIChannelOn4);
    });
    it('channel 5', function () {
      assert.equal('%', k.OBCIChannelOn5);
    });
    it('channel 6', function () {
      assert.equal('^', k.OBCIChannelOn6);
    });
    it('channel 7', function () {
      assert.equal('&', k.OBCIChannelOn7);
    });
    it('channel 8', function () {
      assert.equal('*', k.OBCIChannelOn8);
    });
    it('channel 9', function () {
      assert.equal('Q', k.OBCIChannelOn9);
    });
    it('channel 10', function () {
      assert.equal('W', k.OBCIChannelOn10);
    });
    it('channel 11', function () {
      assert.equal('E', k.OBCIChannelOn11);
    });
    it('channel 12', function () {
      assert.equal('R', k.OBCIChannelOn12);
    });
    it('channel 13', function () {
      assert.equal('T', k.OBCIChannelOn13);
    });
    it('channel 14', function () {
      assert.equal('Y', k.OBCIChannelOn14);
    });
    it('channel 15', function () {
      assert.equal('U', k.OBCIChannelOn15);
    });
    it('channel 16', function () {
      assert.equal('I', k.OBCIChannelOn16);
    });
  });
  describe('Test Signal Control Commands', function () {
    it('Connect to DC', function () {
      assert.equal('p', k.OBCITestSignalConnectToDC);
    });
    it('Connect to Ground', function () {
      assert.equal('0', k.OBCITestSignalConnectToGround);
    });
    it('Connect to Pulse 1x Fast', function () {
      assert.equal('=', k.OBCITestSignalConnectToPulse1xFast);
    });
    it('Connect to Pulse 1x Slow', function () {
      assert.equal('-', k.OBCITestSignalConnectToPulse1xSlow);
    });
    it('Connect to Pulse 2x Fast', function () {
      assert.equal(']', k.OBCITestSignalConnectToPulse2xFast);
    });
    it('Connect to Pulse 2x Slow', function () {
      assert.equal('[', k.OBCITestSignalConnectToPulse2xSlow);
    });
  });
  describe('Channel Setting Commands', function () {
    describe('Channel Selection', function () {
      it('Channel 1', function () {
        assert.equal('1', k.OBCIChannelCmdChannel1);
      });
      it('Channel 2', function () {
        assert.equal('2', k.OBCIChannelCmdChannel2);
      });
      it('Channel 3', function () {
        assert.equal('3', k.OBCIChannelCmdChannel3);
      });
      it('Channel 4', function () {
        assert.equal('4', k.OBCIChannelCmdChannel4);
      });
      it('Channel 5', function () {
        assert.equal('5', k.OBCIChannelCmdChannel5);
      });
      it('Channel 6', function () {
        assert.equal('6', k.OBCIChannelCmdChannel6);
      });
      it('Channel 7', function () {
        assert.equal('7', k.OBCIChannelCmdChannel7);
      });
      it('Channel 8', function () {
        assert.equal('8', k.OBCIChannelCmdChannel8);
      });
      it('Channel 9', function () {
        assert.equal('Q', k.OBCIChannelCmdChannel9);
      });
      it('Channel 10', function () {
        assert.equal('W', k.OBCIChannelCmdChannel10);
      });
      it('Channel 11', function () {
        assert.equal('E', k.OBCIChannelCmdChannel11);
      });
      it('Channel 12', function () {
        assert.equal('R', k.OBCIChannelCmdChannel12);
      });
      it('Channel 13', function () {
        assert.equal('T', k.OBCIChannelCmdChannel13);
      });
      it('Channel 14', function () {
        assert.equal('Y', k.OBCIChannelCmdChannel14);
      });
      it('Channel 15', function () {
        assert.equal('U', k.OBCIChannelCmdChannel15);
      });
      it('Channel 16', function () {
        assert.equal('I', k.OBCIChannelCmdChannel16);
      });
    });
    describe('Power Down', function () {
      it('OFF', function () {
        assert.equal('1', k.OBCIChannelCmdPowerOff);
      });
      it('ON', function () {
        assert.equal('0', k.OBCIChannelCmdPowerOn);
      });
    });
    describe('Gain Setting', function () {
      it('1', function () {
        assert.equal('0', k.OBCIChannelCmdGain1);
      });
      it('2', function () {
        assert.equal('1', k.OBCIChannelCmdGain2);
      });
      it('4', function () {
        assert.equal('2', k.OBCIChannelCmdGain4);
      });
      it('6', function () {
        assert.equal('3', k.OBCIChannelCmdGain6);
      });
      it('8', function () {
        assert.equal('4', k.OBCIChannelCmdGain8);
      });
      it('12', function () {
        assert.equal('5', k.OBCIChannelCmdGain12);
      });
      it('24', function () {
        assert.equal('6', k.OBCIChannelCmdGain24);
      });
    });
    describe('#commandForGain', function () {
      it('gain of 1', function () {
        let expectation = '0';
        let result = k.commandForGain(1);
        return expect(result).to.eventually.equal(expectation);
      });
      it('gain of 2', function () {
        let expectation = '1';
        let result = k.commandForGain(2);
        return expect(result).to.eventually.equal(expectation);
      });
      it('gain of 4', function () {
        let expectation = '2';
        let result = k.commandForGain(4);
        return expect(result).to.eventually.equal(expectation);
      });
      it('gain of 6', function () {
        let expectation = '3';
        let result = k.commandForGain(6);
        return expect(result).to.eventually.equal(expectation);
      });
      it('gain of 8', function () {
        let expectation = '4';
        let result = k.commandForGain(8);
        return expect(result).to.eventually.equal(expectation);
      });
      it('gain of 12', function () {
        let expectation = '5';
        let result = k.commandForGain(12);
        return expect(result).to.eventually.equal(expectation);
      });
      it('gain of 24', function () {
        let expectation = '6';
        let result = k.commandForGain(24);
        return expect(result).to.eventually.equal(expectation);
      });
      it('Invalid command request', function () {
        let result = k.commandForGain('taco');
        return expect(result).to.be.rejected;
      });
    });
    describe('#gainForCommand', function () {
      it('gain of 1', function () {
        assert.equal(1, k.gainForCommand(k.OBCIChannelCmdGain1));
      });
      it('gain of 2', function () {
        assert.equal(2, k.gainForCommand(k.OBCIChannelCmdGain2));
      });
      it('gain of 4', function () {
        assert.equal(4, k.gainForCommand(k.OBCIChannelCmdGain4));
      });
      it('gain of 6', function () {
        assert.equal(6, k.gainForCommand(k.OBCIChannelCmdGain6));
      });
      it('gain of 8', function () {
        assert.equal(8, k.gainForCommand(k.OBCIChannelCmdGain8));
      });
      it('gain of 12', function () {
        assert.equal(12, k.gainForCommand(k.OBCIChannelCmdGain12));
      });
      it('gain of 24', function () {
        assert.equal(24, k.gainForCommand(k.OBCIChannelCmdGain24));
      });
      it('Invalid command request', function () {
        expect(k.gainForCommand.bind(k, '8')).to.throw(`Invalid gain setting of 8 gain must be (0,1,2,3,4,5,6)`);
      });
    });
    describe('#inputTypeForCommand', function () {
      it('Normal', function () {
        assert.equal(k.OBCIStringADCNormal, k.inputTypeForCommand(0));
      });
      it('Shorted', function () {
        assert.equal(k.OBCIStringADCShorted, k.inputTypeForCommand(1));
      });
      it('Bias Method', function () {
        assert.equal(k.OBCIStringADCBiasMethod, k.inputTypeForCommand(2));
      });
      it('MVDD', function () {
        assert.equal(k.OBCIStringADCMvdd, k.inputTypeForCommand(3));
      });
      it('Temp', function () {
        assert.equal(k.OBCIStringADCTemp, k.inputTypeForCommand(4));
      });
      it('Test Signal', function () {
        assert.equal(k.OBCIStringADCTestSig, k.inputTypeForCommand(5));
      });
      it('Bias Dr P', function () {
        assert.equal(k.OBCIStringADCBiasDrp, k.inputTypeForCommand(6));
      });
      it('Bias Dr N', function () {
        assert.equal(k.OBCIStringADCBiasDrn, k.inputTypeForCommand(7));
      });
      it('Invalid command request', function () {
        expect(k.inputTypeForCommand.bind(k, '8')).to.throw('Invalid input type, must be less than 8');
      });
    });
    describe('ADC Channel Input Soruce', function () {
      it('Normal', function () {
        assert.equal('0', k.OBCIChannelCmdADCNormal);
      });
      it('Shorted', function () {
        assert.equal('1', k.OBCIChannelCmdADCShorted);
      });
      it('Bias Method', function () {
        assert.equal('2', k.OBCIChannelCmdADCBiasMethod);
      });
      it('MVDD', function () {
        assert.equal('3', k.OBCIChannelCmdADCMVDD);
      });
      it('Temp', function () {
        assert.equal('4', k.OBCIChannelCmdADCTemp);
      });
      it('Test Signal', function () {
        assert.equal('5', k.OBCIChannelCmdADCTestSig);
      });
      it('Bias DRP', function () {
        assert.equal('6', k.OBCIChannelCmdADCBiasDRP);
      });
      it('Bias DRN', function () {
        assert.equal('7', k.OBCIChannelCmdADCBiasDRN);
      });
    });
    describe('Bias Set', function () {
      it('Include in BIAS', function () {
        assert.equal('1', k.OBCIChannelCmdBiasInclude);
      });
      it('Remove from BIAS', function () {
        assert.equal('0', k.OBCIChannelCmdBiasRemove);
      });
    });
    describe('SRB2 Set', function () {
      it('Disconnect this input from SRB2', function () {
        assert.equal('0', k.OBCIChannelCmdSRB2Diconnect);
      });
      it('Connect this input to the SRB2', function () {
        assert.equal('1', k.OBCIChannelCmdSRB2Connect);
      });
    });
    describe('SRB1 Set', function () {
      it('Disconnect this input from SRB1', function () {
        assert.equal('0', k.OBCIChannelCmdSRB1Diconnect);
      });
      it('Connect this input to the SRB1', function () {
        assert.equal('1', k.OBCIChannelCmdSRB1Connect);
      });
    });
    it('Command to access channel settings', function () {
      assert.equal('x', k.OBCIChannelCmdSet);
    });
    it('Command to latch', function () {
      assert.equal('X', k.OBCIChannelCmdLatch);
    });
  });
  describe('Default Channel Settings', function () {
    it('Set all channels to default', function () {
      assert.equal('d', k.OBCIChannelDefaultAllSet);
    });
    it('Get a report of the default settings card', function () {
      assert.equal('D', k.OBCIChannelDefaultAllGet);
    });
  });
  describe('LeadOff Impedance Commands', function () {
    it('Command to access impedance settings', function () {
      assert.equal('z', k.OBCIChannelImpedanceSet);
    });
    it('Command to latch', function () {
      assert.equal('Z', k.OBCIChannelImpedanceLatch);
    });
    it('Test signal not applied', function () {
      assert.equal('0', k.OBCIChannelImpedanceTestSignalAppliedNot);
    });
    it('Test signal applied', function () {
      assert.equal('1', k.OBCIChannelImpedanceTestSignalApplied);
    });
  });
  describe('Time Sync Stuff', function () {
    it('Can get proper array size', function () {
      assert.equal(10, k.OBCITimeSyncArraySize);
    });
    it('Get correct time sync with conf', function () {
      assert.equal(0.9, k.OBCITimeSyncMultiplierWithSyncConf);
    });
    it('Get correct time sync without conf', function () {
      assert.equal(0.75, k.OBCITimeSyncMultiplierWithoutSyncConf);
    });
    it('Get correct time sync transmission threshold', function () {
      assert.equal(10, k.OBCITimeSyncThresholdTransFailureMS);
    });
  });
  describe('SD card Commands', function () {
    it('logs for 1 hour', function () {
      assert.equal('G', k.OBCISDLogForHour1);
    });
    it('logs for 2 hours', function () {
      assert.equal('H', k.OBCISDLogForHour2);
    });
    it('logs for 4 hours', function () {
      assert.equal('J', k.OBCISDLogForHour4);
    });
    it('logs for 12 hours', function () {
      assert.equal('K', k.OBCISDLogForHour12);
    });
    it('logs for 24 hours', function () {
      assert.equal('L', k.OBCISDLogForHour24);
    });
    it('logs for 5 minutes', function () {
      assert.equal('A', k.OBCISDLogForMin5);
    });
    it('logs for 15 minutes', function () {
      assert.equal('S', k.OBCISDLogForMin15);
    });
    it('logs for 30 minutes', function () {
      assert.equal('F', k.OBCISDLogForMin30);
    });
    it('logs for 14 seconds', function () {
      assert.equal('a', k.OBCISDLogForSec14);
    });
    it('stop logging and close the SD file', function () {
      assert.equal('j', k.OBCISDLogStop);
    });
  });
  describe('SD card string Commands', function () {
    it('logs for 1 hour', function () {
      assert.equal('1hour', k.OBCIStringSDHour1);
    });
    it('logs for 2 hours', function () {
      assert.equal('2hour', k.OBCIStringSDHour2);
    });
    it('logs for 4 hours', function () {
      assert.equal('4hour', k.OBCIStringSDHour4);
    });
    it('logs for 12 hours', function () {
      assert.equal('12hour', k.OBCIStringSDHour12);
    });
    it('logs for 24 hours', function () {
      assert.equal('24hour', k.OBCIStringSDHour24);
    });
    it('logs for 5 minutes', function () {
      assert.equal('5min', k.OBCIStringSDMin5);
    });
    it('logs for 15 minutes', function () {
      assert.equal('15min', k.OBCIStringSDMin15);
    });
    it('logs for 30 minutes', function () {
      assert.equal('30min', k.OBCIStringSDMin30);
    });
    it('logs for 14 seconds', function () {
      assert.equal('14sec', k.OBCIStringSDSec14);
    });
  });
  describe('#sdSettingForString', function () {
    it('correct command for 1 hour', function () {
      let expectation = k.OBCISDLogForHour1;
      let result = k.sdSettingForString('1hour');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 2 hour', function () {
      let expectation = k.OBCISDLogForHour2;
      let result = k.sdSettingForString('2hour');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 4 hour', function () {
      let expectation = k.OBCISDLogForHour4;
      let result = k.sdSettingForString('4hour');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 12 hour', function () {
      let expectation = k.OBCISDLogForHour12;
      let result = k.sdSettingForString('12hour');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 24 hour', function () {
      let expectation = k.OBCISDLogForHour24;
      let result = k.sdSettingForString('24hour');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 5 min', function () {
      let expectation = k.OBCISDLogForMin5;
      let result = k.sdSettingForString('5min');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 15 min', function () {
      let expectation = k.OBCISDLogForMin15;
      let result = k.sdSettingForString('15min');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 30 min', function () {
      let expectation = k.OBCISDLogForMin30;
      let result = k.sdSettingForString('30min');
      return expect(result).to.eventually.equal(expectation);
    });
    it('correct command for 14 seconds', function () {
      let expectation = k.OBCISDLogForSec14;
      let result = k.sdSettingForString('14sec');
      return expect(result).to.eventually.equal(expectation);
    });
    it('Invalid command request', function () {
      let result = k.sdSettingForString('taco');
      return expect(result).to.be.rejected;
    });
  });
  describe('Stream Data Commands', function () {
    it('starts', function () {
      assert.equal('b', k.OBCIStreamStart);
    });
    it('stops', function () {
      assert.equal('s', k.OBCIStreamStop);
    });
  });
  describe('Accel enable/disable commands', function () {
    it('starts', function () {
      assert.equal('n', k.OBCIAccelStart);
    });
    it('stops', function () {
      assert.equal('N', k.OBCIAccelStop);
    });
  });
  describe('Accel packet numbers', function () {
    it('X axis', function () {
      assert.equal(1, k.OBCIGanglionAccelAxisX);
    });
    it('Y axis', function () {
      assert.equal(2, k.OBCIGanglionAccelAxisY);
    });
    it('Z axis', function () {
      assert.equal(3, k.OBCIGanglionAccelAxisZ);
    });
  });
  describe('Miscellaneous', function () {
    it('queries register settings', function () {
      assert.equal('?', k.OBCIMiscQueryRegisterSettings);
    });
    it('softly resets the board', function () {
      assert.equal('v', k.OBCIMiscSoftReset);
    });
  });
  describe('Max channel number commands', function () {
    it('sets max of 8', function () {
      assert.equal('c', k.OBCIChannelMaxNumber8);
    });
    it('sets max of 16', function () {
      assert.equal('C', k.OBCIChannelMaxNumber16);
    });
    it('has correct return messages', function () {
      assert.equal('', k.OBCIChannelMaxNumber8NoDaisyToRemove);
      assert.equal('daisy removed', k.OBCIChannelMaxNumber8SuccessDaisyRemoved);
      assert.equal('16', k.OBCIChannelMaxNumber16DaisyAlreadyAttached);
      assert.equal('daisy attached16', k.OBCIChannelMaxNumber16DaisyAttached);
      assert.equal('no daisy to attach!8', k.OBCIChannelMaxNumber16NoDaisyAttached);
    });
  });
  describe('On board filters', function () {
    it('disable', function () {
      assert.equal('g', k.OBCIFilterDisable);
    });
    it('enable', function () {
      assert.equal('f', k.OBCIFilterEnable);
    });
  });
  describe('Stream packet types/codes', function () {
    it('Standard with Accel', function () {
      assert.equal(0, k.OBCIStreamPacketStandardAccel);
    });
    it('Standard with Raw Aux', function () {
      assert.equal(1, k.OBCIStreamPacketStandardRawAux);
    });
    it('User Defined Packet', function () {
      assert.equal(2, k.OBCIStreamPacketUserDefinedType);
    });
    it('Time Sync Set with accel', function () {
      assert.equal(3, k.OBCIStreamPacketAccelTimeSyncSet);
    });
    it('Time Synced with Accel', function () {
      assert.equal(4, k.OBCIStreamPacketAccelTimeSynced);
    });
    it('Time Sync set with Raw Aux', function () {
      assert.equal(5, k.OBCIStreamPacketRawAuxTimeSyncSet);
    });
    it('Time Synced with Raw Aux', function () {
      assert.equal(6, k.OBCIStreamPacketRawAuxTimeSynced);
    });
    it('Time Synced with Raw Aux', function () {
      assert.equal(7, k.OBCIStreamPacketImpedance);
    });
  });
  describe('Time synced with accel packet', function () {
    it('X axis', function () {
      assert.equal(7, k.OBCIAccelAxisX);
    });
    it('Y axis', function () {
      assert.equal(8, k.OBCIAccelAxisY);
    });
    it('Z axis', function () {
      assert.equal(9, k.OBCIAccelAxisZ);
    });
  });
  describe('Time sync useful numbers', function () {
    it('Time from the board is 4 bytes', function () {
      assert.equal(4, k.OBCIStreamPacketTimeByteSize);
    });
  });
  describe('should return the right command for each channel', function () {
    it('Channel 1', function () {
      let expectation = '1';
      let result = k.commandChannelForCmd(1);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 2', function () {
      let expectation = '2';
      let result = k.commandChannelForCmd(2);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 3', function () {
      let expectation = '3';
      let result = k.commandChannelForCmd(3);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 4', function () {
      let expectation = '4';
      let result = k.commandChannelForCmd(4);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 5', function () {
      let expectation = '5';
      let result = k.commandChannelForCmd(5);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 6', function () {
      let expectation = '6';
      let result = k.commandChannelForCmd(6);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 7', function () {
      let expectation = '7';
      let result = k.commandChannelForCmd(7);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 8', function () {
      let expectation = '8';
      let result = k.commandChannelForCmd(8);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 9', function () {
      let expectation = 'Q';
      let result = k.commandChannelForCmd(9);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 10', function () {
      let expectation = 'W';
      let result = k.commandChannelForCmd(10);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 11', function () {
      let expectation = 'E';
      let result = k.commandChannelForCmd(11);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 12', function () {
      let expectation = 'R';
      let result = k.commandChannelForCmd(12);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 13', function () {
      let expectation = 'T';
      let result = k.commandChannelForCmd(13);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 14', function () {
      let expectation = 'Y';
      let result = k.commandChannelForCmd(14);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 15', function () {
      let expectation = 'U';
      let result = k.commandChannelForCmd(15);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 16', function () {
      let expectation = 'I';
      let result = k.commandChannelForCmd(16);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Invalid channel request', function () {
      let result = k.commandChannelForCmd(17);
      return expect(result).to.be.rejected;
    });
  });
  describe('should return correct channel off command for number', function () {
    it('Channel 1', function () {
      let expectation = '1';
      let result = k.commandChannelOff(1);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 2', function () {
      let expectation = '2';
      let result = k.commandChannelOff(2);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 3', function () {
      let expectation = '3';
      let result = k.commandChannelOff(3);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 4', function () {
      let expectation = '4';
      let result = k.commandChannelOff(4);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 5', function () {
      let expectation = '5';
      let result = k.commandChannelOff(5);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 6', function () {
      let expectation = '6';
      let result = k.commandChannelOff(6);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 7', function () {
      let expectation = '7';
      let result = k.commandChannelOff(7);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 8', function () {
      let expectation = '8';
      let result = k.commandChannelOff(8);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 9', function () {
      let expectation = 'q';
      let result = k.commandChannelOff(9);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 10', function () {
      let expectation = 'w';
      let result = k.commandChannelOff(10);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 11', function () {
      let expectation = 'e';
      let result = k.commandChannelOff(11);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 12', function () {
      let expectation = 'r';
      let result = k.commandChannelOff(12);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 13', function () {
      let expectation = 't';
      let result = k.commandChannelOff(13);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 14', function () {
      let expectation = 'y';
      let result = k.commandChannelOff(14);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 15', function () {
      let expectation = 'u';
      let result = k.commandChannelOff(15);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 16', function () {
      let expectation = 'i';
      let result = k.commandChannelOff(16);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Invalid channel request', function () {
      let result = k.commandChannelOff(17);
      return expect(result).to.be.rejected;
    });
  });
  describe('should return the right command for each sample rate for cyton', function () {
    it('sample rate 16000', function () {
      let expectation = '0';
      let result = k.commandSampleRateForCmdCyton(16000);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 8000', function () {
      let expectation = '1';
      let result = k.commandSampleRateForCmdCyton(8000);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 4000', function () {
      let expectation = '2';
      let result = k.commandSampleRateForCmdCyton(4000);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 2000', function () {
      let expectation = '3';
      let result = k.commandSampleRateForCmdCyton(2000);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 1000', function () {
      let expectation = '4';
      let result = k.commandSampleRateForCmdCyton(1000);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 500', function () {
      let expectation = '5';
      let result = k.commandSampleRateForCmdCyton(500);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 250', function () {
      let expectation = '6';
      let result = k.commandSampleRateForCmdCyton(250);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Invalid sample rate', function () {
      let result = k.commandSampleRateForCmdCyton(17);
      return expect(result).to.be.rejected;
    });
    it('Invalid sample rate type', function () {
      let result = k.commandSampleRateForCmdCyton('taco');
      return expect(result).to.be.rejected;
    });
  });
  describe('should return the right command for each sample rate for ganglion', function () {
    it('sample rate 25600', function () {
      let expectation = '0';
      let result = k.commandSampleRateForCmdGanglion(25600);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 12800', function () {
      let expectation = '1';
      let result = k.commandSampleRateForCmdGanglion(12800);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 6400', function () {
      let expectation = '2';
      let result = k.commandSampleRateForCmdGanglion(6400);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 3200', function () {
      let expectation = '3';
      let result = k.commandSampleRateForCmdGanglion(3200);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 1600', function () {
      let expectation = '4';
      let result = k.commandSampleRateForCmdGanglion(1600);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 800', function () {
      let expectation = '5';
      let result = k.commandSampleRateForCmdGanglion(800);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 400', function () {
      let expectation = '6';
      let result = k.commandSampleRateForCmdGanglion(400);
      return expect(result).to.eventually.equal(expectation);
    });
    it('sample rate 200', function () {
      let expectation = '7';
      let result = k.commandSampleRateForCmdGanglion(200);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Invalid sample rate', function () {
      let result = k.commandSampleRateForCmdGanglion(17);
      return expect(result).to.be.rejected;
    });
    it('Invalid sample rate type', function () {
      let result = k.commandSampleRateForCmdGanglion('taco');
      return expect(result).to.be.rejected;
    });
  });
  describe('should return the right command for each board mode', function () {
    it('board mode default', function () {
      let expectation = '0';
      let result = k.commandBoardModeForMode('default');
      return expect(result).to.eventually.equal(expectation);
    });
    it('board mode debug', function () {
      let expectation = '1';
      let result = k.commandBoardModeForMode('debug');
      return expect(result).to.eventually.equal(expectation);
    });
    it('board mode 2', function () {
      let expectation = '2';
      let result = k.commandBoardModeForMode('analog');
      return expect(result).to.eventually.equal(expectation);
    });
    it('board mode 3', function () {
      let expectation = '3';
      let result = k.commandBoardModeForMode('digital');
      return expect(result).to.eventually.equal(expectation);
    });
    it('Invalid board mode', function () {
      let result = k.commandBoardModeForMode(10);
      return expect(result).to.be.rejected;
    });
    it('Invalid board mode', function () {
      let result = k.commandBoardModeForMode('taco');
      return expect(result).to.be.rejected;
    });
  });
  describe('should return correct channel on command for number', function () {
    it('Channel 1', function () {
      let expectation = '!';
      let result = k.commandChannelOn(1);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 2', function () {
      let expectation = '@';
      let result = k.commandChannelOn(2);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 3', function () {
      let expectation = '#';
      let result = k.commandChannelOn(3);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 4', function () {
      let expectation = '$';
      let result = k.commandChannelOn(4);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 5', function () {
      let expectation = '%';
      let result = k.commandChannelOn(5);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 6', function () {
      let expectation = '^';
      let result = k.commandChannelOn(6);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 7', function () {
      let expectation = '&';
      let result = k.commandChannelOn(7);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 8', function () {
      let expectation = '*';
      let result = k.commandChannelOn(8);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 9', function () {
      let expectation = 'Q';
      let result = k.commandChannelOn(9);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 10', function () {
      let expectation = 'W';
      let result = k.commandChannelOn(10);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 11', function () {
      let expectation = 'E';
      let result = k.commandChannelOn(11);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 12', function () {
      let expectation = 'R';
      let result = k.commandChannelOn(12);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 13', function () {
      let expectation = 'T';
      let result = k.commandChannelOn(13);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 14', function () {
      let expectation = 'Y';
      let result = k.commandChannelOn(14);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 15', function () {
      let expectation = 'U';
      let result = k.commandChannelOn(15);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Channel 16', function () {
      let expectation = 'I';
      let result = k.commandChannelOn(16);
      return expect(result).to.eventually.equal(expectation);
    });
    it('Invalid channel request', function () {
      let result = k.commandChannelOn(17);
      return expect(result).to.be.rejected;
    });
  });
  describe('Number of channels', function () {
    it('Daisy', function () {
      assert.equal(16, k.OBCINumberOfChannelsDaisy);
    });
    it('Default', function () {
      assert.equal(8, k.OBCINumberOfChannelsDefault);
    });
    it('Cyton', function () {
      assert.equal(8, k.OBCINumberOfChannelsCyton);
    });
    it('Cyton', function () {
      assert.equal(2, k.OBCINumberOfChannelsCytonBLE);
    });
    it('Ganglion', function () {
      assert.equal(4, k.OBCINumberOfChannelsGanglion);
    });
  });
  describe('Possible Sample Rates', function () {
    it('should be 125', function () {
      assert.equal(125, k.OBCISampleRate125);
    });
    it('should be 250', function () {
      assert.equal(250, k.OBCISampleRate250);
    });
  });
  describe('Max sample number', function () {
    it('should be 255', function () {
      assert.equal(255, k.OBCISampleNumberMax);
    });
  });
  describe('Radio Channel Limits', function () {
    it('should get the right channel number max', function () {
      expect(k.OBCIRadioChannelMax).to.be.equal(25);
    });
    it('should get the right channel number min', function () {
      expect(k.OBCIRadioChannelMin).to.be.equal(1);
    });
    it('should get the right poll time max', function () {
      expect(k.OBCIRadioPollTimeMax).to.be.equal(255);
    });
    it('should get the right poll time min', function () {
      expect(k.OBCIRadioPollTimeMin).to.be.equal(0);
    });
  });
  describe('Board Types', function () {
    it('should get right name for chan daisy', function () {
      expect(k.OBCIBoardDaisy).to.equal('daisy');
    });
    it('should get right name for chan cyton', function () {
      expect(k.OBCIBoardCyton).to.equal('cyton');
    });
    it('should get right name for chan cyton BLE', function () {
      expect(k.OBCIBoardCytonBLE).to.equal('cytonBLE');
    });
    it('should get right name for chan ganglion', function () {
      expect(k.OBCIBoardGanglion).to.equal('ganglion');
    });
    it('should get right name for chan none', function () {
      expect(k.OBCIBoardNone).to.equal('none');
    });
  });
  describe('numberOfChannelsForBoardTypes', function () {
    it('should get right num chan for daisy board', function () {
      expect(k.numberOfChannelsForBoardType(k.OBCIBoardDaisy)).to.equal(16);
    });
    it('should get right num chan for cyton board', function () {
      expect(k.numberOfChannelsForBoardType(k.OBCIBoardCyton)).to.equal(8);
    });
    it('should get right num chan for cyton BLE board', function () {
      expect(k.numberOfChannelsForBoardType(k.OBCIBoardCytonBLE)).to.equal(2);
    });
    it('should get right num chan for ganglion', function () {
      expect(k.numberOfChannelsForBoardType(k.OBCIBoardGanglion)).to.equal(4);
    });
    it('should get right num chan for none', function () {
      expect(k.numberOfChannelsForBoardType(k.OBCIBoardNone)).to.equal(0);
    });
  });
  describe('boardTypeForNumberOfChannels', function () {
    it('should get daisy board right for num chan', function () {
      expect(k.boardTypeForNumberOfChannels(16)).to.equal(k.OBCIBoardDaisy);
    });
    it('should get cyton board right for num chan', function () {
      expect(k.boardTypeForNumberOfChannels(8)).to.equal(k.OBCIBoardCyton);
    });
    it('should get cyton BLE board right for num chan', function () {
      expect(k.boardTypeForNumberOfChannels(2)).to.equal(k.OBCIBoardCytonBLE);
    });
    it('should get ganglion right for num chan', function () {
      expect(k.boardTypeForNumberOfChannels(4)).to.equal(k.OBCIBoardGanglion);
    });
    it('should get none right for num chan', function () {
      expect(k.boardTypeForNumberOfChannels(0)).to.equal(k.OBCIBoardNone);
    });
  });
  describe('#getChannelSetter', function () {
    // 'channel 1, power on, gain 24, inputType normal, bias include, srb2 connect, srb1 dissconnect'
    describe('channel input selection works', function () {
      // this.timeout(5000)
      it('channel 2', function (done) {
        k.getChannelSetter(2, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[1].should.equal('2');
          val.newChannelSettingsObject.channelNumber.should.equal(2);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('channel 5', function (done) {
        k.getChannelSetter(5, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[1].should.equal('5');
          val.newChannelSettingsObject.channelNumber.should.equal(5);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('channel 9', function (done) {
        k.getChannelSetter(9, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[1].should.equal('Q');
          val.newChannelSettingsObject.channelNumber.should.equal(9);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('channel 15', function (done) {
        k.getChannelSetter(15, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[1].should.equal('U');
          val.newChannelSettingsObject.channelNumber.should.equal(15);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid channel selection', function (done) {
        k.getChannelSetter(0, false, 24, 'normal', true, true, false).should.be.rejected.and.notify(done);
      });
      it('Invalid type', function (done) {
        k.getChannelSetter('0', false, 24, 'normal', true, true, false).should.be.rejected.and.notify(done);
      });
    });
    describe('power selection works', function () {
      it('on', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[2].should.equal('0');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('off', function (done) {
        k.getChannelSetter(1, true, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[2].should.equal('1');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(true);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid type', function (done) {
        k.getChannelSetter(1, 'taco', 24, 'normal', true, true, false).should.be.rejected.and.notify(done);
      });
    });
    describe('gain selection works', function () {
      it('1x', function (done) {
        k.getChannelSetter(1, false, 1, 'normal', true, true, false).then(function (val) {
          val.commandArray[3].should.equal('0');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(1);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('2x', function (done) {
        k.getChannelSetter(1, false, 2, 'normal', true, true, false).then(function (val) {
          val.commandArray[3].should.equal('1');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(2);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('4x', function (done) {
        k.getChannelSetter(1, false, 4, 'normal', true, true, false).then(function (val) {
          val.commandArray[3].should.equal('2');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(4);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('6x', function (done) {
        k.getChannelSetter(1, false, 6, 'normal', true, true, false).then(function (val) {
          val.commandArray[3].should.equal('3');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(6);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('8x', function (done) {
        k.getChannelSetter(1, false, 8, 'normal', true, true, false).then(function (val) {
          val.commandArray[3].should.equal('4');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(8);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('12x', function (done) {
        k.getChannelSetter(1, false, 12, 'normal', true, true, false).then(function (val) {
          val.commandArray[3].should.equal('5');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(12);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('24x', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[3].should.equal('6');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid type', function (done) {
        k.getChannelSetter(1, false, '24', 'normal', true, true, false).should.be.rejected.and.notify(done);
      });
      it('Invalid gain setting', function (done) {
        k.getChannelSetter(1, false, 5, 'normal', true, true, false).should.be.rejected.and.notify(done);
      });
    });
    describe('input type', function () {
      it('normal', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('0');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('shorted', function (done) {
        k.getChannelSetter(1, false, 24, 'shorted', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('1');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('shorted');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('biasMethod', function (done) {
        k.getChannelSetter(1, false, 24, 'biasMethod', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('2');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('biasMethod');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('mvdd', function (done) {
        k.getChannelSetter(1, false, 24, 'mvdd', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('3');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('mvdd');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('temp', function (done) {
        k.getChannelSetter(1, false, 24, 'temp', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('4');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('temp');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('testsig', function (done) {
        k.getChannelSetter(1, false, 24, 'testSig', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('5');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('testSig');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('biasDrp', function (done) {
        k.getChannelSetter(1, false, 24, 'biasDrp', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('6');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('biasDrp');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('biasDrn', function (done) {
        k.getChannelSetter(1, false, 24, 'biasDrn', true, true, false).then(function (val) {
          val.commandArray[4].should.equal('7');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('biasDrn');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid setting', function (done) {
        k.getChannelSetter(1, false, 24, 'taco', true, true, false).should.be.rejected.and.notify(done);
      });
      it('Invalid type', function (done) {
        k.getChannelSetter(1, false, 24, 1, true, true, false).should.be.rejected.and.notify(done);
      });
    });
    describe('bias selection works', function () {
      it('Include', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[5].should.equal('1');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Remove', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', false, true, false).then(function (val) {
          val.commandArray[5].should.equal('0');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(false);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid type', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', 'taco', true, false).should.be.rejected.and.notify(done);
      });
    });
    describe('SRB2 selection works', function () {
      it('Connect', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[6].should.equal('1');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Disconnect', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, false, false).then(function (val) {
          val.commandArray[6].should.equal('0');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(false);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid type', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, 'taco', false).should.be.rejected.and.notify(done);
      });
    });
    describe('SRB1 selection works', function () {
      it('Connect', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, true).then(function (val) {
          val.commandArray[7].should.equal('1');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(true);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Disconnect', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, false).then(function (val) {
          val.commandArray[7].should.equal('0');
          val.newChannelSettingsObject.channelNumber.should.equal(1);
          val.newChannelSettingsObject.powerDown.should.equal(false);
          val.newChannelSettingsObject.gain.should.equal(24);
          val.newChannelSettingsObject.inputType.should.equal('normal');
          val.newChannelSettingsObject.bias.should.equal(true);
          val.newChannelSettingsObject.srb2.should.equal(true);
          val.newChannelSettingsObject.srb1.should.equal(false);
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid type', function (done) {
        k.getChannelSetter(1, false, 24, 'normal', true, true, 'taco').should.be.rejected.and.notify(done);
      });
    });
  });
  describe('#getTestSignalCommand', function () {
    it('ground', function () {
      let expectation = '0';
      let result = k.getTestSignalCommand('ground');
      return expect(result).to.eventually.equal(expectation);
    });
    it('dc', function () {
      let expectation = 'p';
      let result = k.getTestSignalCommand('dc');
      return expect(result).to.eventually.equal(expectation);
    });
    it('Pulse 1x Fast', function () {
      let expectation = '=';
      let result = k.getTestSignalCommand('pulse1xFast');
      return expect(result).to.eventually.equal(expectation);
    });
    it('Pulse 1x Slow', function () {
      let expectation = '-';
      let result = k.getTestSignalCommand('pulse1xSlow');
      return expect(result).to.eventually.equal(expectation);
    });
    it('Pulse 2x Fast', function () {
      let expectation = ']';
      let result = k.getTestSignalCommand('pulse2xFast');
      return expect(result).to.eventually.equal(expectation);
    });
    it('Pulse 2x Slow', function () {
      let expectation = '[';
      let result = k.getTestSignalCommand('pulse2xSlow');
      return expect(result).to.eventually.equal(expectation);
    });
    it('none', function () {
      let expectation = 'd';
      let result = k.getTestSignalCommand('none');
      return expect(result).to.eventually.equal(expectation);
    });
  });
  describe('#getVersionNumber', function () {
    it('should get the major version number from a github standard version string', () => {
      let expectedVersion = 6;
      let inputStringVersion = 'v6.0.0';

      expect(k.getVersionNumber(inputStringVersion)).to.equal(expectedVersion);
    });
  });
  describe('#getImpedanceSetter', function () {
    describe('channel input selection works', function () {
      it('channel 2', function (done) {
        k.getImpedanceSetter(2, false, false).then(function (arrayOfCommands) {
          arrayOfCommands[1].should.equal('2');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('channel 5', function (done) {
        k.getImpedanceSetter(5, false, false).then(function (arrayOfCommands) {
          arrayOfCommands[1].should.equal('5');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('channel 9', function (done) {
        k.getImpedanceSetter(9, false, false).then(function (arrayOfCommands) {
          arrayOfCommands[1].should.equal('Q');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('channel 15', function (done) {
        k.getImpedanceSetter(15, false, false).then(function (arrayOfCommands) {
          arrayOfCommands[1].should.equal('U');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid channel selection', function (done) {
        k.getImpedanceSetter(0, false, false).should.be.rejected.and.notify(done);
      });
      it('Invalid type', function (done) {
        k.getImpedanceSetter('1', false, false).should.be.rejected.and.notify(done);
      });
    });
    describe('P Input selection works', function () {
      it('Test Signal Applied', function (done) {
        k.getImpedanceSetter(1, true, false).then(function (arrayOfCommands) {
          arrayOfCommands[2].should.equal('1');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Test Signal Not Applied', function (done) {
        k.getImpedanceSetter(1, false, false).then(function (arrayOfCommands) {
          console.log('\n\n\narray: ' + arrayOfCommands + '\n\n\n');
          arrayOfCommands[2].should.equal('0');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid type', function (done) {
        k.getImpedanceSetter(1, 'taco', false).should.be.rejected.and.notify(done);
      });
    });
    describe('N Input selection works', function () {
      it('Test Signal Applied', function (done) {
        k.getImpedanceSetter(1, false, true).then(function (arrayOfCommands) {
          arrayOfCommands[3].should.equal('1');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Test Signal Not Applied', function (done) {
        k.getImpedanceSetter(1, false, false).then(function (arrayOfCommands) {
          arrayOfCommands[3].should.equal('0');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Invalid type', function (done) {
        k.getImpedanceSetter(1, false, 'taco').should.be.rejected.and.notify(done);
      });
    });
    describe('Prefix and postfix commands work', function () {
      it('Set', function (done) {
        k.getImpedanceSetter(1, true, true).then(function (arrayOfCommands) {
          arrayOfCommands[0].should.equal('z');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
      it('Latch', function (done) {
        k.getImpedanceSetter(1, true, true).then(function (arrayOfCommands) {
          arrayOfCommands[4].should.equal('Z');
          done();
        }).catch(function (err) {
          done(err);
        });
      });
    });
  });
  describe('sampleRateSetter', function () {
    it('Works for ganglion', function (done) {
      k.getSampleRateSetter('ganglion', 200).then(function (arrayOfCommands) {
        arrayOfCommands[0].should.equal('~');
        arrayOfCommands[1].should.equal('7');
        done();
      }).catch(function (err) {
        done(err);
      });
    });
    it('Works for cyton', function (done) {
      k.getSampleRateSetter('cyton', 250).then(function (arrayOfCommands) {
        arrayOfCommands[0].should.equal('~');
        arrayOfCommands[1].should.equal('6');
        done();
      }).catch(function (err) {
        done(err);
      });
    });
    it('Works for daisy', function (done) {
      k.getSampleRateSetter('daisy', 1000).then(function (arrayOfCommands) {
        arrayOfCommands[0].should.equal('~');
        arrayOfCommands[1].should.equal('4');
        done();
      }).catch(function (err) {
        done(err);
      });
    });
    it('Invalid board type', function (done) {
      k.getSampleRateSetter('taco', 1600).should.be.rejected.and.notify(done);
    });
    it('Invalid board type type', function (done) {
      k.getSampleRateSetter(10, 1600).should.be.rejected.and.notify(done);
    });
    it('Invalid sample rate type', function (done) {
      k.getSampleRateSetter('daisy', 'taco').should.be.rejected.and.notify(done);
    });
  });
  describe('boardModeSetter', function () {
    it('Works for good args', function (done) {
      k.getBoardModeSetter('default').then(function (arrayOfCommands) {
        arrayOfCommands[0].should.equal('/');
        arrayOfCommands[1].should.equal('0');
        done();
      }).catch(function (err) {
        done(err);
      });
    });
    it('bad board mode', function (done) {
      k.getBoardModeSetter('daisy').should.be.rejected.and.notify(done);
    });
    it('Invalid board mode type', function (done) {
      k.getBoardModeSetter(10).should.be.rejected.and.notify(done);
    });
  });
  describe('fun funcs', function () {
    describe('#isNumber', function () {
      it('should return true for object of named type', function () {
        expect(k.isNumber(1)).to.equal(true);
      });
      it('should return false for not of named type', function () {
        expect(k.isNumber('taco')).to.equal(false);
      });
    });
    describe('#isBoolean', function () {
      it('should return true for object of named type', function () {
        expect(k.isBoolean(true)).to.equal(true);
      });
      it('should return false for not of named type', function () {
        expect(k.isBoolean('taco')).to.equal(false);
      });
    });
    describe('#isString', function () {
      it('should return true for object of named type', function () {
        expect(k.isString('taco')).to.equal(true);
      });
      it('should return false for not of named type', function () {
        expect(k.isString(1)).to.equal(false);
      });
    });
    describe('#isUndefined', function () {
      it('should return true for object of named type', function () {
        expect(k.isUndefined()).to.equal(true);
      });
      it('should return false for not of named type', function () {
        expect(k.isUndefined('im here')).to.equal(false);
      });
    });
    describe('#isNull', function () {
      it('should return true for object of named type', function () {
        expect(k.isNull(null)).to.equal(true);
      });
      it('should return false for not of named type', function () {
        expect(k.isNull()).to.equal(false);
      });
      it('should return false for not of named type', function () {
        expect(k.isNull('taco')).to.equal(false);
      });
    });
  });
  describe('Emitters', function () {
    it('Event Emitter Accelerometer', function () {
      assert.equal('accelerometer', k.OBCIEmitterAccelerometer);
    });
    it('Event Emitter BLE Powered On', function () {
      assert.equal('blePoweredOn', k.OBCIEmitterBlePoweredUp);
    });
    it('Event Emitter Close', function () {
      assert.equal('close', k.OBCIEmitterClose);
    });
    it('Event Emitter Dropped Packet', function () {
      assert.equal('droppedPacket', k.OBCIEmitterDroppedPacket);
    });
    it('Event Emitter EOT', function () {
      assert.equal('eot', k.OBCIEmitterEot);
    });
    it('Event Emitter Error', function () {
      assert.equal('error', k.OBCIEmitterError);
    });
    it('Event Emitter Ganglion Found', function () {
      assert.equal('ganglionFound', k.OBCIEmitterGanglionFound);
    });
    it('Event Emitter Hard Set', function () {
      assert.equal('hardSet', k.OBCIEmitterHardSet);
    });
    it('Event Emitter Impedance', function () {
      assert.equal('impedance', k.OBCIEmitterImpedance);
    });
    it('Event Emitter Impedance Array', function () {
      assert.equal('impedanceArray', k.OBCIEmitterImpedanceArray);
    });
    it('Event Emitter Message', function () {
      assert.equal('message', k.OBCIEmitterMessage);
    });
    it('Event Emitter Query', function () {
      assert.equal('query', k.OBCIEmitterQuery);
    });
    it('Event Emitter Raw Data Packet', function () {
      assert.equal('rawDataPacket', k.OBCIEmitterRawDataPacket);
    });
    it('Event Emitter Ready', function () {
      assert.equal('ready', k.OBCIEmitterReady);
    });
    it('Event Emitter RFduino', function () {
      assert.equal('rfduino', k.OBCIEmitterRFduino);
    });
    it('Event Emitter Sample', function () {
      assert.equal('sample', k.OBCIEmitterSample);
    });
    it('Event Emitter Scan Stopped', function () {
      assert.equal('scanStopped', k.OBCIEmitterScanStopped);
    });
    it('Event Emitter Synced', function () {
      assert.equal('synced', k.OBCIEmitterSynced);
    });
  });
  describe('Errors', function () {
    it('errorInvalidByteLength', function () {
      assert.equal(k.OBCIErrorInvalidByteLength, 'Invalid Packet Byte Length');
    });
    it('errorInvalidByteStart', function () {
      assert.equal(k.OBCIErrorInvalidByteStart, 'Invalid Start Byte');
    });
    it('errorInvalidByteStop', function () {
      assert.equal(k.OBCIErrorInvalidByteStop, 'Invalid Stop Byte');
    });
    it('OBCIErrorInvalidData', function () {
      assert.equal(k.OBCIErrorInvalidData, 'Invalid data - try again');
    });
    it('errorInvalidType', function () {
      assert.equal(k.OBCIErrorInvalidType, 'Invalid type - check comments for input type');
    });
    it('errorMissingRegisterSetting', function () {
      assert.equal(k.OBCIErrorMissingRegisterSetting, 'Missing register setting');
    });
    it('errorMissingRequiredProperty', function () {
      assert.equal(k.OBCIErrorMissingRequiredProperty, 'Missing property in JSON');
    });
    it('errorNobleAlreadyScanning', function () {
      assert.equal(k.OBCIErrorNobleAlreadyScanning, 'Scan already under way');
    });
    it('errorNobleNotAlreadyScanning', function () {
      assert.equal(k.OBCIErrorNobleNotAlreadyScanning, 'No scan started');
    });
    it('errorNobleNotInPoweredOnState', function () {
      assert.equal(k.OBCIErrorNobleNotInPoweredOnState, 'Please turn blue tooth on.');
    });
    it('errorTimeSyncIsNull', function () {
      assert.equal(k.OBCIErrorTimeSyncIsNull, "'this.sync.curSyncObj' must not be null");
    });
    it('errorTimeSyncNoComma', function () {
      assert.equal(k.OBCIErrorTimeSyncNoComma, 'Missed the time sync sent confirmation. Try sync again');
    });
    it('errorUndefinedOrNullInput', function () {
      assert.equal(k.OBCIErrorUndefinedOrNullInput, 'Undefined or Null Input');
    });
  });
  describe('Packet Size', function () {
    it('Standard packet size', function () {
      assert.equal(33, k.OBCIPacketSize);
    });
    it('Cyton BLE packet size', function () {
      assert.equal(20, k.OBCIPacketSizeBLECyton);
    });
    it('Small packet size', function () {
      assert.equal(12, k.OBCIPacketSizeBLERaw);
    });
  });
  describe('Register Query on Cyton', function () {
    assert.equal(k.OBCIRegisterQueryAccelerometerFirmwareV1, '\nLIS3DH Registers\n0x07.0\n0x08.0\n0x09.0\n0x0A.0\n0x0B.0\n0x0C.0\n0x0D.0\n0x0E.0\n0x0F.33\n\n0x1F.0\n0x20.8\n0x21.0\n0x22.0\n0x23.18\n0x24.0\n0x25.0\n0x26.0\n0x27.0\n0x28.0\n0x29.0\n0x2A.0\n0x2B.0\n0x2C.0\n0x2D.0\n0x2E.0\n0x2F.20\n0x30.0\n0x31.0\n0x32.0\n0x33.0\n\n0x38.0\n0x39.0\n0x3A.0\n0x3B.0\n0x3C.0\n0x3D.0\n');
    assert.equal(k.OBCIRegisterQueryAccelerometerFirmwareV3, '\nLIS3DH Registers\n0x07 00\n0x08 00\n0x09 00\n0x0A 00\n0x0B 00\n0x0C 00\n0x0D 00\n0x0E 00\n0x0F 33\n\n0x1F 00\n0x20 08\n0x21 00\n0x22 00\n0x23 18\n0x24 00\n0x25 00\n0x26 00\n0x27 00\n0x28 00\n0x29 00\n0x2A 00\n0x2B 00\n0x2C 00\n0x2D 00\n0x2E 00\n0x2F 20\n0x30 00\n0x31 00\n0x32 00\n0x33 00\n\n0x38 00\n0x39 00\n0x3A 00\n0x3B 00\n0x3C 00\n0x3D 00\n');
    assert.equal(k.OBCIRegisterQueryCyton, '\nBoard ADS Registers\nADS_ID, 00, 3E, 0, 0, 1, 1, 1, 1, 1, 0\nCONFIG1, 01, 96, 1, 0, 0, 1, 0, 1, 1, 0\nCONFIG2, 02, C0, 1, 1, 0, 0, 0, 0, 0, 0\nCONFIG3, 03, EC, 1, 1, 1, 0, 1, 1, 0, 0\nLOFF, 04, 02, 0, 0, 0, 0, 0, 0, 1, 0\nCH1SET, 05, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH2SET, 06, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH3SET, 07, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH4SET, 08, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH5SET, 09, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH6SET, 0A, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH7SET, 0B, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH8SET, 0C, 68, 0, 1, 1, 0, 1, 0, 0, 0\nBIAS_SENSP, 0D, FF, 1, 1, 1, 1, 1, 1, 1, 1\nBIAS_SENSN, 0E, FF, 1, 1, 1, 1, 1, 1, 1, 1\nLOFF_SENSP, 0F, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_SENSN, 10, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_FLIP, 11, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATP, 12, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATN, 13, 00, 0, 0, 0, 0, 0, 0, 0, 0\nGPIO, 14, 0F, 0, 0, 0, 0, 1, 1, 1, 1\nMISC1, 15, 00, 0, 0, 0, 0, 0, 0, 0, 0\nMISC2, 16, 00, 0, 0, 0, 0, 0, 0, 0, 0\nCONFIG4, 17, 00, 0, 0, 0, 0, 0, 0, 0, 0\n');
    assert.equal(k.OBCIRegisterQueryCytonDaisy, '\nDaisy ADS Registers\nADS_ID, 00, 3E, 0, 0, 1, 1, 1, 1, 1, 0\nCONFIG1, 01, 96, 1, 0, 0, 1, 0, 1, 1, 0\nCONFIG2, 02, C0, 1, 1, 0, 0, 0, 0, 0, 0\nCONFIG3, 03, EC, 1, 1, 1, 0, 1, 1, 0, 0\nLOFF, 04, 02, 0, 0, 0, 0, 0, 0, 1, 0\nCH1SET, 05, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH2SET, 06, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH3SET, 07, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH4SET, 08, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH5SET, 09, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH6SET, 0A, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH7SET, 0B, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH8SET, 0C, 68, 0, 1, 1, 0, 1, 0, 0, 0\nBIAS_SENSP, 0D, FF, 1, 1, 1, 1, 1, 1, 1, 1\nBIAS_SENSN, 0E, FF, 1, 1, 1, 1, 1, 1, 1, 1\nLOFF_SENSP, 0F, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_SENSN, 10, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_FLIP, 11, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATP, 12, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATN, 13, 00, 0, 0, 0, 0, 0, 0, 0, 0\nGPIO, 14, 0F, 0, 0, 0, 0, 1, 1, 1, 1\nMISC1, 15, 00, 0, 0, 0, 0, 0, 0, 0, 0\nMISC2, 16, 00, 0, 0, 0, 0, 0, 0, 0, 0\nCONFIG4, 17, 00, 0, 0, 0, 0, 0, 0, 0, 0\n');
    assert.equal(k.OBCIRegisterQuerySizeCytonFirmwareV1, k.OBCIRegisterQueryCyton.length + k.OBCIRegisterQueryAccelerometerFirmwareV1.length);
    assert.equal(k.OBCIRegisterQuerySizeCytonDaisyFirmwareV1, k.OBCIRegisterQueryCyton.length + k.OBCIRegisterQueryCytonDaisy.length + k.OBCIRegisterQueryAccelerometerFirmwareV1.length);
    assert.equal(k.OBCIRegisterQuerySizeCytonFirmwareV3, k.OBCIRegisterQueryCyton.length + k.OBCIRegisterQueryAccelerometerFirmwareV3.length);
    assert.equal(k.OBCIRegisterQuerySizeCytonDaisyFirmwareV3, k.OBCIRegisterQueryCyton.length + k.OBCIRegisterQueryCytonDaisy.length + k.OBCIRegisterQueryAccelerometerFirmwareV3.length);
    assert.equal(k.OBCIRegisterQueryNameMISC1, 'MISC1');
    assert.equal(k.OBCIRegisterQueryNameBIASSENSP, 'BIAS_SENSP');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[0], 'CH1SET');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[1], 'CH2SET');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[2], 'CH3SET');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[3], 'CH4SET');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[4], 'CH5SET');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[5], 'CH6SET');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[6], 'CH7SET');
    assert.equal(k.OBCIRegisterQueryNameCHnSET[7], 'CH8SET');
  });
  describe('General', function () {
    it('Ganglion prefix', function () {
      assert.equal('Ganglion', k.OBCIGanglionPrefix);
    });
    it('Ganglion ble search time', function () {
      assert.equal(0.016, k.OBCIGanglionAccelScaleFactor);
    });
    it('Ganglion ble search time', function () {
      assert.equal(20000, k.OBCIGanglionBleSearchTime);
    });
    it('packet size', function () {
      assert.equal(20, k.OBCIGanglionPacketSize);
    });
    it('samples per packet', function () {
      assert.equal(2, k.OBCIGanglionSamplesPerPacket);
    });
    it('packet positions 18 bit', function () {
      expect(k.OBCIGanglionPacket18Bit).to.deep.equal({
        auxByte: 20,
        byteId: 0,
        dataStart: 1,
        dataStop: 19
      });
    });
    it('packet positions 19 bit', function () {
      expect(k.OBCIGanglionPacket19Bit).to.deep.equal({
        byteId: 0,
        dataStart: 1,
        dataStop: 20
      });
    });
  });
  describe('Commands', function () {
    it('Synthetic data mode enable', function () {
      assert.equal('t', k.OBCIGanglionSyntheticDataEnable);
    });
    it('Synthetic data mode disable', function () {
      assert.equal('T', k.OBCIGanglionSyntheticDataDisable);
    });
    it('Impedance start', function () {
      assert.equal('z', k.OBCIGanglionImpedanceStart);
    });
    it('Impedance stop', function () {
      assert.equal('Z', k.OBCIGanglionImpedanceStop);
    });
  });
  describe('Byte Id', function () {
    it('Uncompressed', function () {
      assert.equal(0, k.OBCIGanglionByteIdUncompressed);
    });
    it('should have correct values for 18 bit', function () {
      expect(k.OBCIGanglionByteId18Bit).to.deep.equal({
        max: 100,
        min: 1
      });
    });
    it('should have correct values for 18 bit', function () {
      expect(k.OBCIGanglionByteId19Bit).to.deep.equal({
        max: 200,
        min: 101
      });
    });
    it('Impedance channel 1', function () {
      assert.equal(201, k.OBCIGanglionByteIdImpedanceChannel1);
    });
    it('Impedance channel 2', function () {
      assert.equal(202, k.OBCIGanglionByteIdImpedanceChannel2);
    });
    it('Impedance channel 3', function () {
      assert.equal(203, k.OBCIGanglionByteIdImpedanceChannel3);
    });
    it('Impedance channel 4', function () {
      assert.equal(204, k.OBCIGanglionByteIdImpedanceChannel4);
    });
    it('Impedance channel reference', function () {
      assert.equal(205, k.OBCIGanglionByteIdImpedanceChannelReference);
    });
    it('Multi packet', function () {
      assert.equal(206, k.OBCIGanglionByteIdMultiPacket);
    });
    it('Multi packet stop', function () {
      assert.equal(207, k.OBCIGanglionByteIdMultiPacketStop);
    });
  });
  describe('simblee', function () {
    it('Service', function () {
      assert.equal('fe84', k.SimbleeUuidService);
    });
    it('Receive', function () {
      assert.equal('2d30c082f39f4ce6923f3484ea480596', k.SimbleeUuidReceive);
    });
    it('Write', function () {
      assert.equal('2d30c083f39f4ce6923f3484ea480596', k.SimbleeUuidSend);
    });
    it('Disconnect', function () {
      assert.equal('2d30c084f39f4ce6923f3484ea480596', k.SimbleeUuidDisconnect);
    });
  });
  describe('RFduino BLE UUID', function () {
    it('Service', function () {
      assert.equal(k.RFduinoUuidService, '2220');
    });
    it('Receive', function () {
      assert.equal(k.RFduinoUuidReceive, '2221');
    });
    it('Write/Notify/Subscribe', function () {
      assert.equal(k.RFduinoUuidSend, '2222');
    });
    it('supposed to be a send but can\'t get it working', function () {
      assert.equal(k.RFduinoUuidSendTwo, '2223');
    });
  });
  describe('Cyton BLE', function () {
    it('3 samples per packet', function () {
      assert.equal(k.OBCICytonBLESamplesPerPacket, 3);
    });
  });
  describe('noble', function () {
    it('Peripheral Connect', function () {
      assert.equal('connect', k.OBCINobleEmitterPeripheralConnect);
    });
    it('Peripheral Disconnect', function () {
      assert.equal('disconnect', k.OBCINobleEmitterPeripheralDisconnect);
    });
    it('Peripheral Discover', function () {
      assert.equal('discover', k.OBCINobleEmitterPeripheralDiscover);
    });
    it('Peripheral Services Discover', function () {
      assert.equal('servicesDiscover', k.OBCINobleEmitterPeripheralServicesDiscover);
    });
    it('Service Characteristics Discover', function () {
      assert.equal('characteristicsDiscover', k.OBCINobleEmitterServiceCharacteristicsDiscover);
    });
    it('Service Read', function () {
      assert.equal('read', k.OBCINobleEmitterServiceRead);
    });
    it('Discover', function () {
      assert.equal('discover', k.OBCINobleEmitterDiscover);
    });
    it('Scan Start', function () {
      assert.equal('scanStart', k.OBCINobleEmitterScanStart);
    });
    it('Scan Stop', function () {
      assert.equal('scanStop', k.OBCINobleEmitterScanStop);
    });
    it('State Change', function () {
      assert.equal('stateChange', k.OBCINobleEmitterStateChange);
    });
    it('State Powered On', function () {
      assert.equal('poweredOn', k.OBCINobleStatePoweredOn);
    });
  });
  describe('#getPeripheralLocalNames', function () {
    it('should resolve a list of localNames from an array of peripherals', function (done) {
      let numPerifs = 3;
      let perifs = getListOfPeripheralsOfSize(numPerifs);
      k.getPeripheralLocalNames(perifs).then(list => {
        expect(list.length).to.equal(numPerifs);
        for (let i = 0; i < list.length; i++) {
          expect(list[i]).to.equal(makeLocalName(i));
        }
        done();
      }).catch(done);
    });
    it('should reject if array is empty', function (done) {
      k.getPeripheralLocalNames([]).should.be.rejected.and.notify(done);
    });
  });
  describe('#getPeripheralWithLocalName', function () {
    it('should resovle a peripheral with local name', function (done) {
      let numOfPerifs = 4;
      let perifs = getListOfPeripheralsOfSize(numOfPerifs);
      // console.log('perifs', perifs)
      let goodName = makeLocalName(numOfPerifs - 1); // Will be in the list
      // console.log(`goodName: ${goodName}`)
      k.getPeripheralWithLocalName(perifs, goodName).should.be.fulfilled.and.notify(done);
    });
    it('should reject if local name is not in perif list', function (done) {
      let numOfPerifs = 4;
      let perifs = getListOfPeripheralsOfSize(numOfPerifs);
      let badName = makeLocalName(numOfPerifs + 2); // Garuenteed to not be in the list
      k.getPeripheralWithLocalName(perifs, badName).should.be.rejected.and.notify(done);
    });
    it('should reject if pArray is not array local name is not in perif list', function (done) {
      let badName = makeLocalName(1); // Garuenteed to not be in the list
      k.getPeripheralWithLocalName(badName).should.be.rejected.and.notify(done);
    });
  });
  describe('#isPeripheralGanglion', function () {
    it('should return true when proper localName', function () {
      let list = getListOfPeripheralsOfSize(1);
      let perif = list[0];
      expect(k.isPeripheralGanglion(perif)).to.equal(true);
    });
    it('should return false when incorrect localName', function () {
      let list = getListOfPeripheralsOfSize(1);
      let perif = list[0];
      perif.advertisement.localName = 'burrito';
      expect(k.isPeripheralGanglion(perif)).to.equal(false);
    });
    it('should return false when bad object', function () {
      expect(k.isPeripheralGanglion({})).to.equal(false);
    });
    it('should return false if nothing input', function () {
      expect(k.isPeripheralGanglion()).to.equal(false);
    });
    it('should return false if undfined unput input', function () {
      let list = getListOfPeripheralsOfSize(1);
      let perif = list[0];
      perif.advertisement.localName = undefined;
      expect(k.isPeripheralGanglion(perif)).to.equal(false);
    });
    it('should return false when missing advertisement object', function () {
      let list = getListOfPeripheralsOfSize(1);
      let perif = list[0];
      perif.advertisement = null;
      expect(k.isPeripheralGanglion(perif)).to.equal(false);
    });
  });
});
