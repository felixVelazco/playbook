const Logger = require('./logger') // Invocas el módulo que contiene la clase

// Creación de un objeto
const dbLogger = new Logger('nuevo objeto') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
dbLogger.info('Este es un mensaje informativo')

// Creación de otro objeto
const accessLogger = new Logger('ACCESO')
accessLogger.verbose('Esto es un mensaje Verbose')