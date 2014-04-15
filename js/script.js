"use strict";

/*global helloEditor */
/*global Popcorn */
/*global $ */

/**
 * Script for Video One
 */

var scriptOne = {
    vimeoURL: "https://vimeo.com/91981404",
    runCache: null,
    exerciseTime: null,    
    reset: function () {
        // Set initial State

        helloEditor.setMode(VIDEO_MODE);
        helloEditor.confirmExit = false;

        $("#hint").hide();

        // Hide a bunch of buttons and the rulers stuff
        $("#toggleRulers").hide();
        $("#resetButton").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();
        
        // Video exercise button on lessons only
        $("#jumpExercise").hide();
        $("#jumpLesson").show();
        $("#jumpEnd").hide();

    },
    init: function (time) {

        $("#video").html("");
        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);
        helloEditor.popcorn.unmute();
        helloEditor.popcorn.volume(1.0);

        this.reset();
        helloEditor.refreshUI();

        // Code.org API 
        
        var imagePath = "http://code.org/api/hour/begin_processing.png";
        $('<img src="'+ imagePath +'">').load( function () {
            console.log("CODE API BEGIN");
        });

        // Popcorn Events

        helloEditor.popcorn
            // Show stuff below
            .code({
                start: "00:22",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);
                }
            })
            // Quickly show editor
            .code({
                start: "00:24",
                onStart: function () {
                    $("#editorContainer").fadeIn("fast");
                    helloEditor.loadExample(3);
                }
            })
            // Show the canvas container
            .code({
                start: "00:26",
                onStart: function () {
                    helloEditor.runCode();
                    $("#canvasContainer").fadeIn("fast");
                }
            })    
            // Back to full screen video
            .code({
                start: "00:33.61",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            })

        helloEditor.popcorn.on("ended", function () {
            //helloEditor.showHint(1);
            helloEditor.loadLesson(1,0);
        });

        helloEditor.popcorn.on("play", function () {
            helloEditor.refreshUI();
        });        
    }
};

/**
 * Script for Video Two
 */

var scriptTwo = {
    vimeoURL: "https://vimeo.com/91982023",
    runCache: null,
    exerciseTime: "9:01.5",
    reset: function () {
        // Set initial State

        helloEditor.setMode(VIDEO_MODE);
        helloEditor.confirmExit = false;

        $("#hint").hide();
        $("#toggleRulers").hide();
        helloEditor.hideRulers();

        $("#resetButton").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();
        $("#runButton").hide();

        // Video exercise button on lessons only
        $("#jumpExercise").show();
        $("#jumpLesson").hide();  
        $("#jumpEnd").hide();      
    },
    init: function (time) {

        $("#video").html("");
        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);
        helloEditor.popcorn.unmute();
        helloEditor.popcorn.volume(1.0);

        this.reset();
        helloEditor.refreshUI();

        // Popcorn Events

        helloEditor.popcorn
            // Leave video mode to introduce other UI elements
            .code({
                start: "04:25",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);
                }
            })
            // Show the editor, set the value to nothing
            .code({
                start: "04:28",
                onStart: function () {
                    $("#editorContainer").fadeIn("fast");
                    helloEditor.setCode("");
                    helloEditor.runCode();
                }
            })
            // Manually set editor contents. This could come from a Gist or something.
            .code({
                start: "04:42",
                onStart: function () {
                    //helloEditor.setCode("rect(250, 200, 150, 100);");
                    helloEditor.loadSnippet("2-10");
                }
            })
            // Show the canvas container
            .code({
                start: "04:57",
                onStart: function () {
                    $("#canvasContainer").fadeIn("fast");
                }
            })    
            // Show the rulers
            .code({
                start: "5:09",
                onStart: function () {
                    helloEditor.showRulers();
                }
            })        
            // Show the toggle button
            .code({
                start: "5:18",
                onStart: function () {
                    $("#toggleRulers").fadeIn("fast");
                }
            })   
            // Hide the rulers
            .code({
                start: "5:20",
                onStart: function () {
                    helloEditor.hideRulers();
                }
            })   
            // Show the rulers
            .code({
                start: "5:21",
                onStart: function () {
                    helloEditor.showRulers();
                }
            })                                     
            // Run whatever is in the editor
            .code({
                start: "05:29",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Show the run runButton
            .code({
                start: "05:57",
                onStart: function () {
                    $("#runButton").show();
                }
            })
            // Add one rectangels
            .code({
                start: "06:38",
                onStart: function () {
                    //helloEditor.setCode("rect(250, 200, 150, 100);\n\nrect(50, 80, 40, 25);");
                    helloEditor.loadSnippet("2-20");
                }
            })
            // Add another rectangels
            .code({
                start: "06:39",
                onStart: function () {
                    //helloEditor.setCode("rect(250, 200, 150, 100);\n\nrect(50, 80, 40, 25);\n\nrect(400, 10, 15, 100);");
                    helloEditor.loadSnippet("2-30");
                }
            })
            // Run whatever is in the editor
            .code({
                start: "06:40",
                onStart: function () {
                    helloEditor.runCode();
                }
            })            

            // Jump back to video mode for more explainations
            .code({
                start: "06:54",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            })
            // Show the editor and canvas again and insert code
            .code({
                // TODO: This needs to be back about a half-second to align with cut
                start: "8:19",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    //helloEditor.setCode("rect(250, 200, 150, 100);");
                    helloEditor.loadSnippet("2-40");
                    helloEditor.runCode();
                }
            })
            .code({
                start: "08:28",
                onStart: function () {
                    //helloEditor.setCode("rect(250, 200, 150, 100);\n\nellipse(250,200,200,200);");
                    helloEditor.loadSnippet("2-50");
                }
            })  
            .code({
                start: "08:30",
                onStart: function () {
                    helloEditor.runCode();
                }
            })                 
            .code({
                start: "08:49",
                onStart: function () {
                    //helloEditor.setCode("ellipse(250,200,200,200);\n\nrect(250, 200, 150, 100);");
                    helloEditor.loadSnippet("2-60");
                }
            })
            .code({
                start: "08:51",
                onStart: function () {
                    helloEditor.runCode();
                }
            })       
            .code({
                start: "09:11",
                onStart: function () {
                    helloEditor.loadExample(2);
                }
            })   
            .code({
                start: "09:14",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            .code({
                start: "09:36",
                onStart: function () {
                    $("#nextButton").show();
                }
            });            
        // End Event

        helloEditor.popcorn.on("ended", function () {

            // Load the example here?
            // Actually no, letting it load while video is playing
            // helloEditor.loadExample(2);

            // Show the proper hint over the video

            helloEditor.showHint(2);

        });

        helloEditor.popcorn.on("play", function () {
            helloEditor.refreshUI();
        });         
    }
};

/**
 * Script for Video Three
 */

var scriptThree = {
    vimeoURL: "https://vimeo.com/91982680",
    runCache: null,
    exerciseTime: "5:57.20",    
    reset: function () {
        // Set initial State

        helloEditor.setMode(EDITOR_MODE);
        helloEditor.confirmExit = false;

        $("#hint").hide();
        $("#editorContainer").show();
        $("#canvasContainer").show();
        helloEditor.hideRulers();

        $("#resetButton").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();
        $("#runButton").show();
        
        // Video exercise button on lessons only
        $("#jumpExercise").show(); 
        $("#jumpLesson").hide(); 
        $("#jumpEnd").hide();      
    },
    init: function (time) {

        $("#video").html("");
        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);
        helloEditor.popcorn.unmute();
        helloEditor.popcorn.volume(1.0);

        this.reset();
        helloEditor.refreshUI();

        // Popcorn Events

        helloEditor.popcorn
            // Back to full screen
            .code({
                start: "00:19",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            })
            // Show the editor
            .code({
                start: "02:44",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    //helloEditor.setCode("rect(250,200,100,75);");
                    helloEditor.loadSnippet("3-10");
                    helloEditor.runCode();
                }
            })
            // add stroke()
            .code({
                start: "02:48",
                onStart: function () {
                    //helloEditor.setCode("stroke(0);\nrect(250,200,100,75);");
                    helloEditor.loadSnippet("3-20");
                    helloEditor.runCode();
                }
            })
            // add fill()
            .code({
                start: "02:50",
                onStart: function () {
                    //helloEditor.setCode("stroke(0);\nfill(128);\nrect(250,200,100,75);");
                    helloEditor.loadSnippet("3-30");
                    helloEditor.runCode();
                }
            })
            // Back to video explanation
            .code({
                start: "3:00",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            })
            // RGB Demo -- back to code editor
            .code({
                start: "04:25",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");
                }
            })
            // Now add red stroke
            .code({
                start: "04:34",
                onStart: function () {
                    //helloEditor.setCode("stroke(255,0,0);\nfill(128);\nrect(250,200,100,75);");
                    helloEditor.loadSnippet("3-40");
                }
            })
            // Now add red stroke
            .code({
                start: "04:42",
                onStart: function () {
                    //helloEditor.setCode("stroke(255,0,0);\nfill(0,0,255);\nrect(250,200,100,75);");
                    helloEditor.loadSnippet("3-50");
                }
            })
            // Now add red stroke
            .code({
                start: "04:45",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Show Color Picker
            .code({
                start: "04:56",
                onStart: function () {

                    $("#colorPicker").spectrum("container").css({
                        top: 28,
                        left: 20
                    });
                    $("#colorPicker").spectrum("show");

                }
            })
            // Hide color Picker
            .code({
                start: "05:05",
                onStart: function () {
                    $("#colorPicker").spectrum("hide");
                }
            })
            // Background Code
            .code({
                start: "05:34",
                onStart: function () {

                    //helloEditor.setCode("background(216,225,149);\n\nstroke(255,0,0);\nfill(0,0,255);\nrect(250,200,100,75);");
                    helloEditor.loadSnippet("3-60");
                }
            })
            // Background Run
            .code({
                start: "05:41",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Example
            .code({
                start: "06:15",
                onStart: function () {
                    helloEditor.loadExample(3);
                    helloEditor.runCode();
                }
            })
            // Show the reset button when I mention it
            .code({
                start: "06:25",
                onStart: function () {
                    $("#resetButton").show();

                }
            });
        // End Event

        helloEditor.popcorn.on("ended", function () {

            // Show the proper hint over the video

            helloEditor.showHint(3);

            $("#nextButton").show();

        });

        helloEditor.popcorn.on("play", function () {
            helloEditor.refreshUI();
        });         
    }
};

/**
 * Script for Video Four
 */

var scriptFour = {
    vimeoURL: "https://vimeo.com/91983330",
    runCache: null,
    exerciseTime: "10:21",    
    reset: function () {
        // Set initial State

        helloEditor.setMode(VIDEO_MODE);
        helloEditor.confirmExit = false;

        $("#hint").hide();

        $("#resetButton").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();

        $("#runButton").show();
        
        // Video exercise button on lessons only
        $("#jumpExercise").show();
        $("#jumpLesson").hide(); 
        $("#jumpEnd").hide();       


     },
    init: function (time) {

        $("#video").html("");
        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);
        helloEditor.popcorn.unmute();
        helloEditor.popcorn.volume(1.0);

        this.reset();
        helloEditor.refreshUI();

        // Popcorn Events

        helloEditor.popcorn
            // Show the editor
            .code({
                start: "04:44",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("");
                    helloEditor.runCode();
                }
            })
            // add setup
            .code({
                start: "04:47",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n\n}\n\n");
                    helloEditor.loadSnippet("4-10");
                }
            })
            // add draw
            .code({
                start: "04:48",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n\n}\n\nvoid draw() {\n\n}");
                    helloEditor.loadSnippet("4-20");
                }
            })
            // add size
            .code({
                start: "04:55",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n\n}");
                    helloEditor.loadSnippet("4-30");
                }
            })
            // add background
            .code({
                start: "05:05",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n}");
                    helloEditor.loadSnippet("4-40");
                }
            })
            // add some shapes
            .code({
                start: "05:07",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255, 255, 255);\n  fill(160, 220, 90);\n  ellipse(250, 200, 300, 300);\n\n  fill(160, 210, 230);\n  rect(250, 200, 100, 75);\n}");
                    helloEditor.loadSnippet("4-50");
                }
            })
            // run it!
            .code({
                start: "05:17",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Back to video explanation
            .code({
                start: "5:48",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            })
            // Show the editor for mouseX mouseY demonstration
            .code({
                start: "07:31",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n}");
                    helloEditor.loadSnippet("4-60");
                    helloEditor.runCode();
                }
            })
            // add mouseX and mouseY
            .code({
                start: "07:43",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                    helloEditor.loadSnippet("4-70");
                }
            })
            // run it!
            .code({
                start: "07:45",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // background moves to setup
            .code({
                start: "09:39",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n  background(0);\n}\n\nvoid draw() {\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                    helloEditor.loadSnippet("4-80");
                }
            })
            // run it!
            .code({
                start: "09:56",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Example
            .code({
                start: "10:38",
                onStart: function () {
                    helloEditor.loadExample(4);
                    helloEditor.runCode();
                }
            });

        // End Event

        helloEditor.popcorn.on("ended", function () {

            // Show the proper hint over the video

            helloEditor.showHint(4);

            $("#nextButton").show();
            $("#resetButton").show();

        });

        helloEditor.popcorn.on("play", function () {
            helloEditor.refreshUI();
        });         
    }
};

/**
 * Script for Video Five
 */

var scriptFive = {
    vimeoURL: "https://vimeo.com/91980887",
    runCache: null,
    exerciseTime: "5:34",    

    reset: function () {
        // Set initial State

        helloEditor.setMode(VIDEO_MODE);
        helloEditor.confirmExit = false;

        $("#hint").hide();

        $("#resetButton").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();        

        $("#runButton").show();

        // Video exercise button on lessons only
        $("#jumpExercise").show();
        $("#jumpLesson").hide();
        $("#jumpEnd").hide();        

    },
    init: function (time) {

        $("#video").html("");
        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);
        helloEditor.popcorn.unmute();
        helloEditor.popcorn.volume(1.0);

        this.reset();
        helloEditor.refreshUI();

        // Popcorn Events
        helloEditor.popcorn
            // Show the editor
            .code({
                start: "02:37",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("");
                    helloEditor.runCode();
                }
            })
            // add a circle
            .code({
                start: "02:40",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n}");
                    helloEditor.loadSnippet("5-10");
                    helloEditor.runCode();
               }
            })
            // add an if statement
            .code({
                start: "02:50",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n\n  if (mousePressed) {\n    rect(250,200,100,100);\n  }\n\n}");
                    helloEditor.loadSnippet("5-20");
                    helloEditor.runCode();
               }
            })
            // Back to video explanation
            .code({
                start: "3:13",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            })
            // And we're back
            .code({
                start: "04:00",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n\n  if (mousePressed) {\n    rect(250,200,100,100);\n  }\n\n}");
                    helloEditor.loadSnippet("5-30");
                    helloEditor.runCode();
                }
            })
            
            // add an if statement
            .code({
                start: "04:05",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n  stroke(255);\n  fill(128);\n\n  if (mousePressed) {\n    rect(250,200,100,100);\n  } else {\n     ellipse(250, 200, 100, 100);\n  }\n}");
                    helloEditor.loadSnippet("5-40");
                    helloEditor.runCode();
               }
            })
            

            // back to interact painting program
            .code({
                start: "04:30",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n  background(0);\n}\n\nvoid draw() {\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                    helloEditor.loadSnippet("5-50");
                    helloEditor.runCode();
               }
            })
            // add if statement to this
            .code({
                start: "04:46",
                onStart: function () {
                    //helloEditor.setCode("void setup() {\n  size(500,400);\n  background(0);\n}\n\nvoid draw() {\n\n  if (mousePressed) {\n    background(0);\n  }\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                    helloEditor.loadSnippet("5-60");
                    helloEditor.runCode();
               }
            })
            // Back to video explanation
            .code({
                start: "5:15",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            })
            // And we're back
            .code({
                start: "05:55",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    // Example
                    helloEditor.loadExample(5);
                    helloEditor.runCode();
                }
            });

        helloEditor.popcorn.on("ended", function () {

            // Show the proper hint over the video

            helloEditor.showHint(5);

            $("#nextButton").show();
            $("#resetButton").show();

        });
        
        helloEditor.popcorn.on("play", function () {
            helloEditor.refreshUI();
        }); 
    }
};

/**
 * Script for Video Six
 */

var scriptSix = {
    vimeoURL: "https://vimeo.com/91980417",
    runCache: null,
    exerciseTime: "1:19",    
    reset: function () {
        // Set initial State

        helloEditor.setMode(VIDEO_MODE);
        helloEditor.confirmExit = false;

        $("#hint").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();

        // Video exercise button on lessons only
        $("#jumpExercise").hide(); 
        $("#jumpLesson").hide();     
        $("#jumpEnd").show();    
    
    },

    init: function (time) {

        $("#video").html("");
        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);
        helloEditor.popcorn.unmute();
        helloEditor.popcorn.volume(1.0);

        this.reset();
        helloEditor.refreshUI();

        // Code.org API
        
        var imagePath = "http://code.org/api/hour/finish_processing.png";
        $('<img src="'+ imagePath +'">').load( function () {
            console.log("CODE API END");
        });

        // Popcorn Events
        // 
        helloEditor.popcorn
            // Show stuff below
            .code({
                start: "00:24",
                onStart: function () {
                    helloEditor.setMode(EDITOR_MODE);
                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");                    
                }
            })
            // Show share button
            .code({
                start: "00:30",
                onStart: function () {
                    $("#shareButton").show();
                }
            })
            // Back to video
            .code({
                start: "00:35",
                onStart: function () {
                    helloEditor.setMode(VIDEO_MODE);
                }
            });

        // End Event
        
        helloEditor.popcorn.on("ended", function () {

            helloEditor.setMode(EDITOR_MODE);
            helloEditor.refreshUI();

            helloEditor.confirmExit = true;

            $("#editorContainer").fadeIn("fast");
            $("#canvasContainer").fadeIn("fast");

            helloEditor.showHint(6);

            $("#resetButton").show();
            $("#shareButton").show();
            $("#runButton").show();
        });

        helloEditor.popcorn.on("play", function () {
            helloEditor.refreshUI();
        });         
    }
};

/**
 * Script catalog
 */

var scripts = [
    scriptOne, scriptTwo, scriptThree, scriptFour, scriptFive, scriptSix
];