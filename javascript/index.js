// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction(
  "steak",
  0,
  (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    // ADD NEXT STEP HERE
    getInstruction(
      "steak",
      1,
      (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "steak",
          2,
          (step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "steak",
              3,
              (step4) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "steak",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#steak"
                    ).innerHTML += `<li>${step5}</li>`;
                    // Bonus 1
                    document
                      .querySelector("#steakImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  })
  .then(() => {
    return obtainInstruction("steak", 1).then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 2).then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 3).then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 4).then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 5).then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 6).then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    });
  })
  .then(() => {
    return obtainInstruction("steak", 7).then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    });
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
makeBroccoli();
async function makeBroccoli() {
  for (let i = 0; i < 7; i++) {
    await obtainInstruction("broccoli", i).then((step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    });
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

// Bonus 2 - Promise all
makeBrusselsSprouts();
async function makeBrusselsSprouts() {
  let steps = [...Array(8).keys()].map((i) =>
    obtainInstruction("brusselsSprouts", i).then((step) => step)
  );

  Promise.all(steps)
    .then((results) => {
      results.forEach((step) => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${step}</li>`;
      });
    })
    .then(() => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    });
}

