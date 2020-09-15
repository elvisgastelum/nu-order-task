resource "aws_acm_certificate" "cert" {
  provider          = aws.east
  domain_name       = var.website_domain
  validation_method = "DNS"
}

resource "aws_acm_certificate_validation" "cert" {
  provider        = aws.east
  certificate_arn = aws_acm_certificate.cert.arn

  validation_record_fqdns = [
    "${aws_route53_record.validation.fqdn}",
  ]
}