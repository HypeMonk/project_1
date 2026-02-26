# Tds project1 solutions Q-2
# Task

Listen to the generated audio and transcribe the full 300-digit number.

### What to submit

What to submit
Submit JSON in this exact shape:

    {"number":"(300 digit)","hash":"(hash)"}

## Solution
###  I tried many python scripts which transcribe automatic but they  all are slow and inaccurate.. so i only find that solution which is fast and accurate (within 30 seconds)

Go to : https://audioconvert.ai/ (its free and fast and accurate)

Upload your downloaded audio to it and it will give you transcript of audio

which will look like :

Two five four nine one five two nine two zero one five one five four five two four four zero eight four zero five six two five five one six zero four one one one zero 

#### That doesn't look like our submission format.. so for that i make a simple python script where you have to copy paste this output and your hash in that script.. it will give you your complete submission format answer.

# script : audio.py

