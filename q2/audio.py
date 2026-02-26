import re, json


raw = """ paste_your_transcirbed_output_here """


HASH = "your_hash_code"  # ← paste your hash

WORD_MAP = {
    "zero":"0","one":"1","two":"2","three":"3","four":"4",
    "five":"5","six":"6","seven":"7","eight":"8","nine":"9","oh":"0"
}

def convert(text):
    text = text.lower()
    for word, digit in WORD_MAP.items():
        text = re.sub(rf"\b{word}\b", digit, text)
    return re.sub(r"[^0-9]", "", text)  # strips spaces, dots, newlines, everything

digits = convert(raw)

print(f"Digits ({len(digits)}):\n{digits}")

if len(digits) == 300:
    submission = json.dumps({"number": digits, "hash": HASH}, separators=(",",":"))
    print("\n✅ Submission JSON:")
    print(submission)
    with open("submission.json", "w") as f:
        f.write(submission)
    print("💾 Saved to submission.json")
else:
    print(f"\n⚠️ Got {len(digits)} digits, need 300. Check your raw text.")
