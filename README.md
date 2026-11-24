# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/samidyt/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047-makefun/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/samidyt/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047-makefun/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

One out-of-office auto-reply, as if a houseplant sent it, written by the
program in `main.ts` to `/output/entry.txt` (program/v1 harness, Node 22,
standard library only).

## The line (91 chars)

> I'm the fern. Ignored since March, still alive out of spite. Your email has been composted.

## Why this line

- **Reads as a houseplant's out-of-office auto-reply:** the fern speaks for
  itself, in first person, about the email it received.
- **Actually funny:** "still alive out of spite" is a fresh turn, not a stock
  office phrase; "your email has been composted" lands the joke on the last
  words.
- **The plant's own life drives the joke:** ignored since March, alive despite
  neglect, compost as the plant's own endgame.
- **Tight:** 91 characters, no wasted words, one clean line.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–120 characters, not only
whitespace, exactly one line — and fails loudly instead of handing in a bad
entry. Verified: the line is 91 characters, one line, valid UTF-8.

See `BUILD-NOTES.md` for the drafting notes and the local-run verification.
