const input = document.querySelector(`input[type="file"]`);
const output = document.querySelector(".output");

let arrayID = [],
  arrayPGN = [],
  arrayPGNDEC = [],
  tsc1 = false;

let objData = {
  0: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  265: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  265: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  59647: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  59904: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  61442: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  61443: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  61444: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
    Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
    Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
    Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
    Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
    Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
    Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
    Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
    Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
    Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
    Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
    Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
    Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
    Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
    Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
    Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
    Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
    Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
    `,
  61445: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  61448: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  64697: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
    Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
    Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
    Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
    Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
    Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
    Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
    Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
    Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
    Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
    Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
    Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
    Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
    Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
    Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
    Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
    Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
    Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
    `,
  64800: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  64830: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  64891: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  64947: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  64948: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65031: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65159: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65164: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65241: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65247: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65248: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65253: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65257: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65262: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65263: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65266: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
  65270: `Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  Electronic Engine Controller 1: Long Name	Type	SPN	Start Byte	Start Bit	Byte Length	Bit Length	Resolution	Offset	Unit	Min Value	Max Value
  Engine Speed	measured	190	4	1	2	0	0.125	0	RPM	0	8031.875
  Driver's Demand Engine - Percent Torque	measured	512	2	1	1	0	1	-125	%	-125	125
  Actual Engine Torque	measured	513	3	1	1	0	1	-125	%	-125	125
  Engine Torque Mode	measured	899	1	1	0	4	1	0	state	0	15
  Source Address of Controlling Device for Engine Control	status	1483	6	1	1	0	1	0	raw	0	255
  Engine Starter Mode	status	1675	7	1	0	4	1	0	state	0	12
  Engine Demand – Percent Torque	measured	2432	8	1	1	0	1	-125	%	-125	125
  Actual Engine - Percent Torque High Resolution	measured	4154	1	5	0	4	0.125	0	%	0	0.875
  `,
};

input.addEventListener("change", () => {
  const reader = new FileReader();

  tsc1 = false;

  reader.readAsText(input.files[0]);
  reader.onload = () => {
    reader.result.split(/[\n\r]+/).map((a, index) => {
      if (a.indexOf("/", 2) == 2) {
        if (!arrayID.includes(a.substr(26, 2))) {
          arrayID.push(a.substr(26, 2));
        }
      }
    });

    output.innerHTML = `<div class="card text-center  mt-5 mb-5">
                            <div class="card-header"><h5>Information générale</h5></div>
                                <div id="heyye" class="d-flex flex-column text-start card-body">
                                    <h7 class="card-title">Il y a <span class="fw-bold"> ${arrayID.length} </span> appareil(s) communicant(s) sur le bus CAN.</h7>
                                </div>
                        </div>`;

    arrayID.map((a, index) => {
      output.innerHTML += `
                        <div class="  card text-center mt-5 mb-5">
                            <div class="card-header">
                                <ul class="nav nav-pills card-header-pills">
                                    <li class="nav-item">
                                    ID n°${
                                      index + 1
                                    } :   <span class="fs-4 fw-bold text-primary">${a}<span>
                                    </li>
                                </ul>
                            </div>
                            <div class="elementOfId corps card-body">
                            </div>
                        </div>
                        `;

      reader.result.split(/[\n\r]+/).map((c) => {
        if (c.substr(26, 2) == a) {
          if (!arrayPGN.includes(c.substr(22, 4))) {
            arrayPGN.push(c.substr(22, 4));
            // console.log(c.substr(22, 4));

            if (arrayPGN.includes("0000")) {
              console.log("yes il est là");
              tsc1 = true;
            }

            arrayPGNDEC.push(parseInt(c.substr(22, 4), 16));
          }
        }
      });
      let cellules = document.querySelectorAll(".elementOfId");
      arrayPGNDEC
        .sort((a, b) => a - b)
        .map((a, indexa) => {
          cellules.item(
            index
          ).innerHTML += `                                    
                        <div class=" card text-start mt-3 mb-3">
                            <div class="card-header  text-dark">
                                PGN : <span class=" fs-4 fw-bold text-primary">
                                ${a.toString(16).toUpperCase()}
                                </span>
                            </div>
                            <div class="card-header">${objData[a]}</div>
                        </div>
                        `;
        });

      arrayPGNDEC = [];
    });

    if (tsc1) {
      heyye.innerHTML += `
      <h7 class="card-title">La trame TSC1 a été detecté sur la communication</h7>`;
    }
  };
});
