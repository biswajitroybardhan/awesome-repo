# Mailbox runbook — NOT YET PROVISIONED OR MONITORED

The site links to `biswajitroybardhan@gmail.com` and `biswajitroybardhan1@gmail.com`. Those addresses
are **not confirmed to exist or be monitored**. The site says so explicitly:

- `privacy.html` §10: "Replace this with a monitored mailbox before public launch."
- `security.html`: "Until the mailbox is monitored before public launch, treat this
  as a disclosure process to establish, not a live SLA."

Do not change those sentences until the checklist below is genuinely complete.

## 1. Provision

- [ ] Create both addresses with the domain owner / mail provider.
- [ ] Enable MFA on the mail accounts and on the DNS/domain account.
- [ ] Forward each address to at least two named humans, not to a single person.
- [ ] Record the named owners and their backup in the release ticket.
- [ ] Add a delivery test from an external address and confirm receipt.

## 2. Monitor

- [ ] Check both mailboxes at least once per working day.
- [ ] Keep an acknowledgement log with received timestamp, ticket ID and owner.
- [ ] Acknowledge a privacy request within the period stated in `privacy.html`.
- [ ] Acknowledge a security report within the period stated in `security.html`.
- [ ] Define escalation for a report that mentions participant data or a key leak.
- [ ] Test the escalation path with a harmless drill before launch.

A shared calendar reminder or a ticketing rule is acceptable; an unread inbox is not.

## 3. Acknowledgement templates

Privacy:

```text
Received. We have logged your request and will respond with the next steps
within the period stated in the privacy notice. Please do not send clinical
details or other people's data by email.
```

Security:

```text
Thank you for the report. We have recorded it and will investigate.
Please do not include participant data. We will follow up with findings
and a remediation timeline.
```

## 4. Public claim rule

Only after sections 1 and 2 are complete and evidenced may the placeholder wording
be removed from `privacy.html` and `security.html`. Until then the honest position
is "process to establish", which is what the site currently says.
