// Paso 1: Ya fue todo creado y subido a GitHub
// Paso 2: Practicamos variables y tipos

// Exercise 1 - Mensaje HL7 crudo (const — no cambia)
const rawMessage = 
  'MSH|^~\\&|HIS|HOSPITAL|LAB|HOSPITAL|20260617143000||ORU^R01|MSG00001|P|2.5\r' +
  'PID|1||12345^^^HOSPITAL^MR||Garcia^Maria||19850315|F\r' +
  'OBR|1|ORD001|LAB001|CBC^Complete Blood Count|||20260617143000\r' +
  'OBX|1|NM|WBC^White Blood Cells||7.2|10*3/uL|4.0-11.0|N|||F';

  let segmentCount = 0;

// console.log — prueba una de estas:
// console.log(rawMessage.length);
// console.log(rawMessage.slice(0, 20));

// Exercise 2 — Count pipe-delimited fields in a segment
function getFieldCount(segment) {
  return segment.split('|').length;
}

// Test
/* console.log(getFieldCount('PID|1|12345|Garcia^Maria')); */

// Exercise 3 - Identify segment type by prefix

function getSegmentType(segment) {
  if (segment.startsWith('PID')) {
    return 'PID (Patient Identification)';
  } else if (segment.startsWith('OBX')) {
    return 'OBX (Observation Result)';
  } else if (segment.startsWith('OBR')) {
    return 'OBR (Observation Request)';
  } else if (segment.startsWith('MSH')) {
    return 'MSH (Message Header)';
  } else {
    return 'OTHER';
  }
}

// Test
/* console.log(getSegmentType('PID|1||12345'));
console.log(getSegmentType('OBX|1|NM|WBC'));
console.log(getSegmentType('OBR|1|ORD001'));
console.log(getSegmentType('MSH|^~\\&|HIS')); */


// Exercise 4 — Loop segments and print only OBR, PID, OBX, MSH, OTHER


const segments = rawMessage.split('\r');  // I split the raw message into segments using the carriage return (\r) as the delimiter

// console.log(segments); // I print the segments to the console
// I use segmentCount to keep track of the number of segments in the message
segmentCount = segments.length;
/* console.log('Total segments:', segmentCount); */

for (const segment of segments) { // I iterate over each segment in the array
  if (segment.startsWith('OBR')) {
    console.log('OBR segment found:', segment);
  /* } else if (segment.startsWith('PID')) {
    console.log('PID segment found:', segment);
  } else if (segment.startsWith('OBX')) {
    console.log('OBX segment found:', segment);
  } else if (segment.startsWith('MSH')) {
    console.log('MSH segment found:', segment);
  } else {
    console.log('OTHER segment found:', segment); */
  }
}

// Exercise 5 - Get message type from MSH-9
// This is the main challenge of this lesson: to make a function that gets an HL7 string and returns a specific type of data in this case the MSH (Message Header) segment type

let hl7Message = rawMessage; // Its redundant to declare the variable again, but its good to keep it for clarity

function getMessageType(hl7Message) {
  const segments = hl7Message.split('\r');
  for (const segment of segments) {
    if (segment.startsWith('MSH')) {
      return segment.split('|')[8];
    }
  } 
}

console.log(getMessageType(hl7Message));