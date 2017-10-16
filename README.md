# Visually Track Your Fitness #

This code was partially borrowed from [mwhittaker](https://github.com/mwhittaker/weight) and extrapolated for my personal use.
You can record your squat, bench, deadlift and weight by command-lining the following:
	
	python3 logger.py bench 225

If you would like to view the graph visualization of that particular lift over time:

	python3 logger.py bench 225 open

which will open up an interactive graph in your default browser. 

Otherwise, if you would just like to view a particular graph without actually logging a new entry:
    
    python3 logger.py bench javascript
Hope you enjoy!