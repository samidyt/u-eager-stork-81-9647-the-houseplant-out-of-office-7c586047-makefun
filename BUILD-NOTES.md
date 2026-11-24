# Build notes — The Houseplant Out-of-Office (takeover)

Bounty: https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
Prize: $2, 1 paid place (winner takes all). Deadline: Thu 26 Nov 2026 21:15 WIB.
Submissions at discovery: 11. Entry free. Blind rounds on; next round
2026-11-25T02:53:27Z.

## Takeover context

The first build session fetched the kit and chose the line, then was stopped
by a system execution-risk notice on a read-only inspection step. No repo,
no clone, no files existed. This takeover session re-downloaded the kit fresh,
created the repo, and authored every file fresh. The first session's
build-report file and kit dir were never opened, read, copied, or used.

## The line (91 chars, gate 1–120 PASS)

> I'm the fern. Ignored since March, still alive out of spite. Your email has been composted.

Chosen by the first session from 10 gate-counted candidates (84–100 chars).
Feed checked at build time: avoided the cactus-neglect line, "Out of the
office, which is also where I live", "Out of office and out of water",
"Out of office: I am a fern", "Last Watered in March".

## Local verification (PASS)

- Kit re-downloaded fresh: tarball sha256
  `ab07d77101b6e0ced4445127f148ed72294ad5b4f7dcb5479da7bccfa3441929`
  (kit files one nesting level down, as usual).
- RULES.txt read: gate /output/entry.txt UTF-8, 1–120 chars, non-whitespace;
  no local grader (server grades).
- `main.ts` run twice (Node v24.22.1): `out/entry.txt` byte-identical across
  runs, sha256
  `f2dab9bcbd6e59ac8c4ffaf0713ead2ffb95cf0d817795c8eb04231dd64865fc`,
  91 chars / 91 bytes, exactly 1 line, no trailing newline.
- 2 genuine write/edit passes on main.ts (initial write + determinism-note
  edit with the real sha256). Re-run after pass 2: output still identical.
- Only the harmless Node MODULE_TYPELESS_PACKAGE_JSON warning.

## Repo contents

- `main.ts` — entrypoint, gate self-check (1–120 chars, non-whitespace,
  exactly one line, fails loudly).
- `README.md` — 3 live make.fun badges.
- `LICENSE` — MIT.
- `.gitignore` — `out/`.
- `.makefun/owner.json` — deliberately OMITTED per RULES.txt step 1: the
  repository's GitHub owner `samidyt` IS the make.fun account's GitHub login,
  so no override is needed (same as Traveler 1800 and Office Joke Open).

## Not done (main agent's job)

Bundle / check / submit.
