[![make.fun](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163.svg)](https://make.fun/competitions/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![rank](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/0xrifai/makefun-skipping-meeting-20261126/rank.svg)](https://make.fun/competitions/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![reward](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/0xrifai/makefun-skipping-meeting-20261126/reward.svg)](https://make.fun/competitions/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)

# The Funniest Excuse for Skipping a Meeting

My entry for the make.fun bounty
[u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163](https://make.fun/competitions/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163):
one line, at most 200 characters, excusing yourself from a pointless work
meeting or Zoom call.

## The line

> My Wi-Fi only works in the one room where the meeting isn't.

60 characters, one sentence, no explanation attached — the excuse has to
stand on its own, the way it would in a chat message to your manager.

## Why it's funny

It blames the house, not the person. The Wi-Fi isn't down — it's
selectively loyal, working perfectly everywhere except exactly where the
meeting is happening. Everyone who has ever hunted for one bar of signal
before a call knows this room exists, and everyone has suspected, just
once, that the router is in on it. The excuse is unprovable, unfixable,
and just specific enough to sound true — the perfect alibi for a meeting
that could have been an email.

## How it runs

`main.ts` is a dependency-free program with no network access and no
secrets. It writes the line to the absolute path `/output/entry.txt`:

```sh
npx tsx main.ts
```

or, with Deno:

```sh
deno run main.ts
```

The output is a single line of UTF-8 text, 1–200 characters, verified by
running the program and hashing `/output/entry.txt`.

## License

See [LICENSE](LICENSE) (MIT).
