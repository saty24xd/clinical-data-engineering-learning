console.log("JS environment ready");
/*
HL7 → Health Level Seven
*/

// 2. STRINGS
// const — el mensaje original no debería mutarse directamente
const rawMessage = 'MSH|^~\\&|HIS|HOSPITAL|...';
// let — algo que vas calculando o actualizando
let segmentCount = 0;
let isValid = true;

// DEBEMOS EVITAR: var

// En HL7 casi todo es string
const segmentType = 'PID';
const patientName = 'Garcia^Maria';

//DELIMITADORES

const single = 'MSH|...';      // comillas simples
const double = "MSH|...";      // comillas dobles — equivalente
const template = `Segment: ${segmentType}`;  // template literal — muy útil

//Propiedades útiles para HL7

const segment = 'PID|1|12345|Garcia^Maria';

segment.length;           // 24 — cantidad de caracteres
segment.startsWith('PID'); // true
segment.split('|');       // ['PID', '1', '12345', 'Garcia^Maria']
segment.includes('Garcia'); // true
// El | es el delimitador de campos (pipe) 

// En HL7: ^~\& son separadores especiales
const hl7Header = 'MSH|^~\\&|';  // \\ produce un solo \ en el string

// 3. NUMBERS
// Muchos "números" en HL7 son strings. NO convertir sin necesidad.
const fieldCount = 12;        // entero
const version = 2.5;          // decimal
const timestamp = 20260617143000;  // número largo (como MSH-7)

// Importante: no confundir números con strings
const pidFromHl7 = '12345';   // string (viene del mensaje)
const pidAsNumber = 12345;    // number

pidFromHl7 === 12345;         // false — tipos distintos
Number('12345');              // 12345 — conversión explícita
parseInt('12345', 10);        // 12345 — entero desde string

//4. BOOLEANS
// true/false son los dos valores posibles

const isPidSegment = segment.startsWith('PID');
const hasPatientId = patientId !== '';
const isEmergency = priority === 'EM';

if (isPidSegment) {
  console.log('Encontré datos del paciente');
}

//5. Saber que tipo de datos tenemos
typeof rawMessage;   // "string"
typeof fieldCount;   // "number"
typeof isValid;      // "boolean"
typeof undefined;    // "undefined"