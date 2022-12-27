import openai
from API import SECRET_KEY

openai.api_key = SECRET_KEY

model_engine = "text-davinci-002"

def generate_response(prompt):
    completions = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )

    message = completions.choices[0].text
    return message.strip()


print(generate_response("apa yang dimaksud dengan programmer?"))