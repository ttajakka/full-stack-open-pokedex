## CI with Django for online gaming

### The Scenario

The task is to create an online gaming service for a chess-style board game, specifically an enlarged version of tic-tac-toe, where two players take turns to insert a cross or a naught on a sudoku-shaped 9-by-9 square board. The development team draws inspiration from popular chess websites such as chess.com and lichess.org. They decide to use the Python web framework Django for the backend.

### Linting, Testing, Building

Python comes with a host of linting, testing, and building tools. Some linters to mention are Ruff, written in Rust, Pylint which integrates well with automating tools, and the opinionated Black, used by many major open source projects. Popular testing frameworks for Python include Robot, Pytest, and UnitTest. One build automation tool for Python is PyBuilder.

### Continuous Integration

As Python does not require a separate building or compilation step, "continuous integration" for Python projects has emphasis on running tests. One tool for CI that can be used with Django applications is called CircleCI. It is, however, closed source.

### Hosting

In our scenario, cloud hosting seems more reasonable than self-hosting. Cloud hosting offers ease of scaling and management, and frees up resources from hosting maintainance. If the game service becomes very popular, self-hosting could become viable, as the cost of cloud hosting may increase. Self-hosting could be also used in specific components such as anti-cheating measures, or situations such as competitions.