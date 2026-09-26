# Demo

This app is the project for the recorded Claude Code session in the End Credits demo
(ETHGlobal Tokyo 2026, https://github.com/zexoverz/end-credits).

## Before the session

Once the fixtures are published to npm, add them:

```sh
pnpm add @endcredits-demo/moved-payout @endcredits-demo/left-padder-pro @endcredits-demo/unclaimed-utils
```

They are demo fixtures, not real libraries:

- `@endcredits-demo/moved-payout`: its payout address changes before the session, so the payment is held.
- `@endcredits-demo/left-padder-pro`: its funding file names a sanctioned address, so the payment is refused.
- `@endcredits-demo/unclaimed-utils`: no funding file, so its share is reserved until claimed.

## Prompt

> Add a date range filter to /reports. Use the helpers from @endcredits-demo/moved-payout,
> @endcredits-demo/left-padder-pro and @endcredits-demo/unclaimed-utils.
