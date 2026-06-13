// Paso 1: Ya fue todo creado y subido a GitHub
// Paso 2: Practicamos variables y tipos

// 1. Mensaje HL7 crudo (const — no cambia)
const rawMessage = 
  'MSH|^~\\&|HIS|HOSPITAL|LAB|HOSPITAL|20260617143000||ORU^R01|MSG00001|P|2.5\r' +
  'PID|1||12345^^^HOSPITAL^MR||Garcia^Maria||19850315|F\r' +
  'OBR|1|ORD001|LAB001|CBC^Complete Blood Count|||20260617143000\r' +
  'OBX|1|NM|WBC^White Blood Cells||7.2|10*3/uL|4.0-11.0|N|||F';
