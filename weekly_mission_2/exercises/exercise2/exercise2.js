const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
 ]

 explorers.forEach(explorer => {
   console.log(explorer.name);
   console.log("Stack: " + explorer.stack);
 });

 const stackList = explorers.map((explorer) => explorer.stack);
 console.log("\nLista de stacks de los explorers: ");
 console.log(stackList);
 
 const jsList = explorers.filter((explorer) => explorer.stack.includes("js"));
 console.log("\nExplorers que tienen 'js' en su stack:");
 console.log(jsList.map((explorer) => explorer.name));
 
 const cdmxExplorer = explorers.find((explorer) => explorer.city == "CDMX");
 console.log("\nPrimer explorer que es de la 'CDMX'");
 console.log(cdmxExplorer.name);

 const sumaExercises = explorers.reduce((acc, num) => acc+num.exercises_completed,0);
 console.log("\nSuma de los ejercicios de los explorers: ");
 console.log(sumaExercises);

 const exercisesSomeFinished = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished===true);
 console.log("\nAlgunos terminaron la mision 'frontend'?");
 console.log(exercisesSomeFinished);

 const onboardingEveryFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
 console.log("\nTodos terminaron la mision 'Onboarding'?");
 
 console.log(onboardingEveryFinished);
 
 
 
 