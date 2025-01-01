import CopyableCodeBlock from '@/app/components/CopyableCodeBlock'

const cobolExamples = [
  {
    title: "Hello World Program",
    description: "A simple COBOL program that prints 'Hello, World!' to the console.",
    code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO-WORLD.
       ENVIRONMENT DIVISION.
       DATA DIVISION.
       PROCEDURE DIVISION.
           DISPLAY "Hello, World!".
           STOP RUN.`
  },
  {
    title: "Variable Declaration",
    description: "Example of how to declare variables in COBOL.",
    code: `       WORKING-STORAGE SECTION.
       01 WS-NUM1 PIC 9(5) VALUE 10000.
       01 WS-NUM2 PIC 9(5) VALUE 20000.
       01 WS-RESULT PIC 9(6).`
  },
  {
    title: "Conditional Statements",
    description: "Example of IF-ELSE statement in COBOL.",
    code: `       IF WS-NUM1 > WS-NUM2
           DISPLAY "WS-NUM1 is greater"
       ELSE
           IF WS-NUM1 < WS-NUM2
               DISPLAY "WS-NUM2 is greater"
           ELSE
               DISPLAY "Both numbers are equal"
           END-IF
       END-IF.`
  },
  {
    title: "Loops",
    description: "Example of a PERFORM loop in COBOL.",
    code: `       PERFORM VARYING WS-COUNTER FROM 1 BY 1 UNTIL WS-COUNTER > 5
           DISPLAY "Counter: " WS-COUNTER
       END-PERFORM.`
  }
]

export default function CobolQuickReference() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold terminal-glow mb-6">COBOL QUICK REFERENCE</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Essential COBOL commands and syntax for quick lookup during development. Click the &apos;Copy&apos; button to easily copy code snippets.
        </p>
      </section>

      <section className="space-y-8">
        {cobolExamples.map((example, index) => (
          <div key={index} className="card p-6">
            <h2 className="text-2xl font-bold mb-2 terminal-shadow">{example.title}</h2>
            <p className="text-muted-foreground mb-4">{example.description}</p>
            <CopyableCodeBlock code={example.code} language="cobol" />
          </div>
        ))}
      </section>
    </div>
  )
}

