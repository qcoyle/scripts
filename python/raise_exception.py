text = "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by their character"
max_length = 20

if len(text) > max_length:
            raise Exception("Text provided exceeds available length of {} characters".format(max_length))